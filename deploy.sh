#!/bin/bash

# Deploy script for simulate-sdk to sandbox S3 folder
set -e

# Configuration
S3_BUCKET="${S3_BUCKET:-mcbr-sdk-stg}"
S3_REGION="${S3_REGION:-us-east-2}"
SANDBOX_FOLDER="sandbox"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-E2W4RYILSLDYVS}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    print_error "AWS credentials not configured. Please run 'aws configure' first."
    exit 1
fi

# Check if S3 bucket is set
if [ "$S3_BUCKET" = "your-s3-bucket-name" ]; then
    print_error "Please set the S3_BUCKET environment variable or update the script with your bucket name."
    exit 1
fi

print_status "Starting deployment to sandbox environment..."

# Clean previous build
print_status "Cleaning previous build..."
rm -rf dist/

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install
fi

# Build the project
print_status "Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

# Sync files to S3 sandbox folder
print_status "Deploying to S3 bucket: s3://${S3_BUCKET}/${SANDBOX_FOLDER}/"

# Upload files with proper content types and cache headers
aws s3 sync dist/ s3://${S3_BUCKET}/${SANDBOX_FOLDER}/ \
    --region ${S3_REGION} \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json"

# Upload HTML files with no-cache headers
aws s3 sync dist/ s3://${S3_BUCKET}/${SANDBOX_FOLDER}/ \
    --region ${S3_REGION} \
    --include "*.html" \
    --include "*.json" \
    --cache-control "no-cache, no-store, must-revalidate"


# Invalidate CloudFront cache if distribution ID is provided
if [ ! -z "$DISTRIBUTION_ID" ]; then
    print_status "Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id ${DISTRIBUTION_ID} \
        --paths "/${SANDBOX_FOLDER}/*" > /dev/null
    print_success "CloudFront cache invalidated"
fi

# Output the deployment URL
DEPLOYMENT_URL="https://${S3_BUCKET}.s3.${S3_REGION}.amazonaws.com/${SANDBOX_FOLDER}/index.html"
if [ "$S3_REGION" = "us-east-1" ]; then
    DEPLOYMENT_URL="https://${S3_BUCKET}.s3.amazonaws.com/${SANDBOX_FOLDER}/index.html"
fi

print_success "Deployment completed successfully!"
print_success "Sandbox URL: ${DEPLOYMENT_URL}"

# Optional: Open in browser (uncomment the line below if desired)
# open ${DEPLOYMENT_URL}
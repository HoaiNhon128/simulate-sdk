import { RouterProvider } from "react-router";
import {
  ThemeProvider,
  ToastProvider,
  TooltipProvider,
} from "mcr-design-systems";
import router from "./router";

function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      enableSystem={false}
      enableCustomPersister
    >
      <TooltipProvider>
        <ToastProvider>
          <RouterProvider router={router} />
        </ToastProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;

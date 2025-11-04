var B = Object.defineProperty;
var v = (e) => {
  throw TypeError(e);
};
var H = (e, t, i) => t in e ? B(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var o = (e, t, i) => H(e, typeof t != "symbol" ? t + "" : t, i), y = (e, t, i) => t.has(e) || v("Cannot " + i);
var n = (e, t, i) => (y(e, t, "read from private field"), i ? i.call(e) : t.get(e)), d = (e, t, i) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, i), p = (e, t, i, s) => (y(e, t, "write to private field"), s ? s.call(e, i) : t.set(e, i), i), k = (e, t, i) => (y(e, t, "access private method"), i);
function f(e, t) {
  return e == null ? t : typeof e == "number" ? `${e}px` : e;
}
function L(e) {
  if (typeof e != "string") return e;
  const t = document.querySelector(e);
  if (!t) throw new Error(`Not found container: ${e}`);
  return t;
}
function z(e) {
  try {
    return new URL(e, window.location.href).origin;
  } catch {
    return;
  }
}
var h, r, w, u, m, C, E;
class x {
  constructor(t) {
    d(this, m);
    d(this, h);
    d(this, r);
    d(this, w);
    d(this, u);
    const i = t.origin ?? z(t.url) ?? "*";
    p(this, h, {
      container: L(t.container),
      url: t.url,
      origin: i,
      width: f(t.width, "100%"),
      height: f(t.height, "600px"),
      sandbox: t.sandbox ?? "allow-scripts allow-same-origin allow-forms allow-popups allow-modals",
      allow: t.allow ?? "clipboard-write; fullscreen; microphone; camera",
      params: t.params
    }), p(this, u, (s) => k(this, m, E).call(this, s));
  }
  mount() {
    if (n(this, r)) return this;
    const { container: t, url: i, width: s, height: c, sandbox: l, allow: g, params: b } = n(this, h), O = k(this, m, C).call(this, i, b), a = document.createElement("iframe");
    return a.src = O, a.width = "0", a.height = "0", a.style.width = s, a.style.height = c, a.style.border = "0", a.style.display = "block", l && a.setAttribute("sandbox", l), g && a.setAttribute("allow", g), t.appendChild(a), p(this, r, a), window.addEventListener("message", n(this, u)), this;
  }
  unmount() {
    return n(this, r) ? (window.removeEventListener("message", n(this, u)), n(this, r).remove(), p(this, r, void 0), this) : this;
  }
  onEvent(t) {
    return p(this, w, t), this;
  }
  send(t) {
    if (!n(this, r) || !n(this, r).contentWindow) return !1;
    const i = n(this, h).origin || "*";
    return n(this, r).contentWindow.postMessage(t, i), !0;
  }
  setSize(t, i) {
    return n(this, r) ? (n(this, r).style.width = f(t, n(this, h).width), n(this, r).style.height = f(i, n(this, h).height), this) : this;
  }
  get iframe() {
    return n(this, r);
  }
}
h = new WeakMap(), r = new WeakMap(), w = new WeakMap(), u = new WeakMap(), m = new WeakSet(), C = function(t, i) {
  if (!i) return t;
  const s = new URL(t, window.location.href);
  return Object.entries(i).forEach(([c, l]) => {
    l != null && s.searchParams.set(c, String(l));
  }), s.toString();
}, E = function(t) {
  var c;
  const { origin: i } = n(this, h);
  if (i !== "*" && t.origin !== i) return;
  const s = t.data;
  !s || typeof s != "object" || !("type" in s) || (c = n(this, w)) == null || c.call(this, s);
};
class N {
  constructor(t = {}) {
    o(this, "backdrop");
    o(this, "container");
    o(this, "closeBtn");
    o(this, "isOpenFlag", !1);
    o(this, "opts");
    o(this, "keydownHandler");
    o(this, "backdropClickHandler");
    this.opts = {
      width: t.width ?? "90vw",
      height: t.height ?? "90vh",
      maxWidth: t.maxWidth ?? "1200px",
      maxHeight: t.maxHeight ?? "800px",
      zIndex: t.zIndex ?? 9999,
      backdropOpacity: t.backdropOpacity ?? 0.5,
      closeOnBackdrop: t.closeOnBackdrop ?? !0,
      closeOnEscape: t.closeOnEscape ?? !0,
      showCloseButton: t.showCloseButton ?? !0,
      containerClass: t.containerClass ?? "",
      backdropClass: t.backdropClass ?? ""
    }, this.create();
  }
  create() {
    this.backdrop = document.createElement("div"), this.backdrop.style.cssText = `
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, ${this.opts.backdropOpacity});
      z-index: ${this.opts.zIndex};
      display: none;
      justify-content: center;
      align-items: center;
    `, this.opts.backdropClass && (this.backdrop.className = this.opts.backdropClass), this.container = document.createElement("div"), this.container.style.cssText = `
      position: relative;
      width: ${this.opts.width};
      height: ${this.opts.height};
      max-width: ${this.opts.maxWidth};
      max-height: ${this.opts.maxHeight};
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    `, this.opts.containerClass && (this.container.className = this.opts.containerClass), this.container.setAttribute("role", "dialog"), this.container.setAttribute("aria-modal", "true"), this.opts.showCloseButton && (this.closeBtn = document.createElement("button"), this.closeBtn.type = "button", this.closeBtn.innerHTML = "✕", this.closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        border: none;
        background-color: rgba(0, 0, 0, 0.1);
        color: #666;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 50%;
        z-index: ${this.opts.zIndex + 2};
        display: flex;
        align-items: center;
        justify-content: center;
      `, this.closeBtn.addEventListener("click", () => this.close()), this.closeBtn.addEventListener("mouseenter", () => {
      this.closeBtn && (this.closeBtn.style.backgroundColor = "rgba(0, 0, 0, 0.2)");
    }), this.closeBtn.addEventListener("mouseleave", () => {
      this.closeBtn && (this.closeBtn.style.backgroundColor = "rgba(0, 0, 0, 0.1)");
    }), this.container.appendChild(this.closeBtn)), this.opts.closeOnBackdrop && (this.backdropClickHandler = (t) => {
      t.target === this.backdrop && this.close();
    }, this.backdrop.addEventListener("click", this.backdropClickHandler)), this.opts.closeOnEscape && (this.keydownHandler = (t) => {
      t.key === "Escape" && this.isOpenFlag && this.close();
    }, document.addEventListener("keydown", this.keydownHandler)), this.backdrop.appendChild(this.container), document.body.appendChild(this.backdrop);
  }
  getContainer() {
    return this.container;
  }
  open() {
    this.isOpenFlag || (this.isOpenFlag = !0, this.backdrop.style.display = "flex", document.body.style.overflow = "hidden");
  }
  close() {
    this.isOpenFlag && (this.isOpenFlag = !1, this.backdrop.style.display = "none", document.body.style.overflow = "");
  }
  toggle() {
    this.isOpenFlag ? this.close() : this.open();
  }
  isOpen() {
    return this.isOpenFlag;
  }
  destroy() {
    this.close(), this.backdropClickHandler && this.backdrop.removeEventListener("click", this.backdropClickHandler), this.keydownHandler && document.removeEventListener("keydown", this.keydownHandler), this.backdrop.remove();
  }
}
class F {
  constructor({
    clientId: t,
    email: i,
    firstName: s,
    lastName: c,
    theme: l
  }) {
    o(this, "instance");
    o(this, "modal");
    o(this, "clientId");
    o(this, "email");
    o(this, "firstName");
    o(this, "lastName");
    o(this, "theme");
    this.modal = new N({
      width: "90vw",
      height: "90vh",
      maxWidth: "1200px",
      maxHeight: "800px",
      closeOnBackdrop: !0,
      closeOnEscape: !0,
      showCloseButton: !0,
      zIndex: 9999
    });
    const g = "https://staging.mcr-staging.xyz", b = new URL(g).origin;
    this.instance = new x({
      container: this.modal.getContainer(),
      url: g,
      origin: b,
      width: "100%",
      height: "100%",
      clientId: t
    }), this.clientId = t, this.email = i, this.firstName = s, this.lastName = c, this.theme = l;
  }
  open() {
    this.modal.isOpen() || (this.modal.open(), this.instance.iframe || this.instance.mount());
  }
  close() {
    this.modal.isOpen() && this.modal.close();
  }
  init(t, i) {
    var s;
    (s = this.instance) == null || s.unmount(), this.instance = new x({
      container: this.modal.getContainer(),
      url: t || "https://staging.mcr-staging.xyz",
      origin: i || new URL(t || "https://staging.mcr-staging.xyz").origin,
      width: "100%",
      height: "100%",
      clientId: ""
    }), this.modal.isOpen() && this.instance.mount();
  }
  auth() {
    this.theme && this.instance.send({
      type: "host:theme",
      payload: { theme: this.theme }
    }), this.instance.send({
      type: "host:partner-auth",
      payload: {
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        clientId: this.clientId
      }
    });
  }
  setTheme(t) {
    this.instance.send({
      type: "host:theme",
      payload: { theme: t }
    });
  }
  onEvent(t) {
    this.instance.onEvent(t);
  }
  isModalOpen() {
    return this.modal.isOpen();
  }
  toggle() {
    this.modal.isOpen() ? this.close() : this.open();
  }
  destroy() {
    var t;
    this.close(), (t = this.instance) == null || t.unmount(), this.modal.destroy();
  }
}
try {
  typeof window < "u" && (window.McbrEmbedSDK = { WebEmbed: x }, window.MCRSDK = F);
} catch {
}
export {
  x as WebEmbed
};
//# sourceMappingURL=mcbr-embed-sdk.es.js.map

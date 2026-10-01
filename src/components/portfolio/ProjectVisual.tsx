import {
  FiArrowRight,
  FiCheck,
  FiDatabase,
  FiMonitor,
  FiShoppingBag,
  FiWifiOff,
} from "react-icons/fi";
import type { PortfolioProject } from "@/app/resources/projects";

// Diagrammatic artwork, not screenshots or invented customer data.
export function ProjectVisual({
  visual,
}: {
  visual: PortfolioProject["visual"];
}) {
  return (
    <div className={`project-art art-${visual}`} aria-hidden="true">
      <span className="art-caption">
        {visual === "canvas" ? "Shared canvas" : "System overview"}
      </span>
      {visual === "stations" && (
        <div className="station-diagram">
          <div className="station-row">
            {["01", "02", "03"].map((n) => (
              <div className="station" key={n}>
                <FiMonitor />
                <span>TILL {n}</span>
                <i />
              </div>
            ))}
          </div>
          <div className="station-connectors">
            <span />
            <span />
            <span />
          </div>
          <div className="database-node">
            <FiDatabase />
            <div>
              <strong>One source of truth</strong>
              <span>Inventory · Sales · Staff</span>
            </div>
            <FiCheck />
          </div>
          <span className="diagram-note">FASTAPI + POSTGRESQL</span>
        </div>
      )}
      {visual === "mobile" && (
        <div className="mobile-diagram">
          <div className="floating-label">
            <FiWifiOff /> Built to work offline
          </div>
          <div className="phone">
            <div className="phone-camera" />
            <div className="phone-brand">
              ora<span>forge</span>
              <small>POINT OF SALE</small>
            </div>
            <div className="phone-products">
              {["Stock", "Sales", "Receipts", "Reports"].map((x, i) => (
                <div key={x}>
                  <span>{["▧", "↗", "≡", "▥"][i]}</span>
                  {x}
                </div>
              ))}
            </div>
            <div className="phone-storage">
              <FiDatabase /> On-device SQLite <FiCheck />
            </div>
            <div className="phone-home" />
          </div>
          <span className="mobile-badge">
            Your shop.
            <br />
            In your pocket.
          </span>
        </div>
      )}
      {visual === "storefront" && (
        <div className="store-diagram">
          <div className="store-wordmark">
            nicoo<span>FURNITURE HUB</span>
          </div>
          <svg className="chair-art" viewBox="0 0 280 260" fill="none">
            <ellipse
              cx="144"
              cy="231"
              rx="104"
              ry="10"
              fill="#3f432f"
              opacity=".12"
            />
            <path
              d="M67 62Q67 39 91 39H190Q207 39 207 59V154H70Z"
              fill="#57604a"
            />
            <path
              d="M82 55Q82 46 93 46H181Q194 46 194 59V128H81Z"
              fill="#758069"
            />
            <path
              d="M66 131Q66 119 80 119H195Q209 119 209 133V165H66Z"
              fill="#414d39"
            />
            <path d="M76 132H197V158H76Z" fill="#8b9279" />
            <path
              d="M57 111Q48 111 48 123V168H78V117Q78 111 69 111Z"
              fill="#57604a"
            />
            <path
              d="M200 111Q192 111 192 121V168H223V123Q223 111 215 111Z"
              fill="#57604a"
            />
            <path
              d="M61 167L55 222H65L79 167M198 167L213 222H223L217 167"
              fill="#5b3824"
            />
            <path d="M77 168H196" stroke="#283326" strokeWidth="6" />
          </svg>
          <div className="store-flow">
            <span>
              <FiShoppingBag /> Browse
            </span>
            <FiArrowRight />
            <span>Checkout</span>
            <FiArrowRight />
            <span className="mpesa-pill">M-PESA</span>
          </div>
        </div>
      )}
      {visual === "mapping" && (
        <div className="mapping-diagram">
          <div className="data-file">
            <span className="file-label">SUPPLIER.CSV</span>
            {["ART_NR", "VK_PREIS", "SIZE_S_QTY", "IMAGE_1"].map((x) => (
              <div key={x}>
                <i />
                {x}
              </div>
            ))}
          </div>
          <div className="mapping-arrow">
            <span>
              p<span>↗</span>
            </span>
            <FiArrowRight />
          </div>
          <div className="data-file clean">
            <span className="file-label">SHOPIFY.CSV</span>
            {["Variant SKU", "Variant Price", "Option1 Value", "Image Src"].map(
              (x) => (
                <div key={x}>
                  <FiCheck />
                  {x}
                </div>
              ),
            )}
          </div>
          <span className="mapping-note">MAP → NORMALIZE → VALIDATE</span>
        </div>
      )}
      {visual === "canvas" && (
        <div className="canvas-diagram">
          <div className="canvas-tools">
            <span className="canvas-color" />
            <span>✎</span>
            <span>○</span>
            <span>▱</span>
          </div>
          <svg viewBox="0 0 380 210" fill="none">
            <path
              d="M56 130C110 49 174 38 209 85C246 134 175 185 151 145C124 103 225 68 316 94"
              stroke="#ad5b41"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <rect
              x="88"
              y="59"
              width="196"
              height="111"
              rx="9"
              stroke="#777f63"
              strokeWidth="2"
              strokeDasharray="7 6"
            />
          </svg>
          <span className="collab-cursor cursor-one">↖ John</span>
          <span className="collab-cursor cursor-two">↖ Collaborator</span>
        </div>
      )}
    </div>
  );
}

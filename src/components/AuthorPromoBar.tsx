import { useCallback, useState } from 'react';
import { openUrl } from '@tauri-apps/plugin-opener';
import { ExternalLink, ShoppingBag, X } from 'lucide-react';
import qqQrCode from '../assets/images/author-qq-qrcode.png';
import './AuthorPromoBar.css';

const SHOP_URL = 'https://pay.qxvx.cn/shop/SJQ3EKW3';
const QQ_NUMBER = '1748931836';

export function AuthorPromoBar() {
  const [qrOpen, setQrOpen] = useState(false);

  const openShop = useCallback(async () => {
    try {
      await openUrl(SHOP_URL);
    } catch {
      window.open(SHOP_URL, '_blank', 'noopener,noreferrer');
    }
  }, []);

  return (
    <>
      <div className="author-promo-bar" role="banner" aria-label="作者推广栏">
        <button type="button" className="author-promo-shop" onClick={openShop}>
          <span className="author-promo-shop-badge">卡网</span>
          <ShoppingBag size={14} aria-hidden="true" />
          <span className="author-promo-shop-text">官方卡网 · 点击进入选购</span>
          <ExternalLink size={13} className="author-promo-shop-arrow" aria-hidden="true" />
        </button>

        <span className="author-promo-divider" aria-hidden="true" />

        <button
          type="button"
          className="author-promo-qq"
          onClick={() => setQrOpen(true)}
          title="点击查看 QQ 二维码"
        >
          <img
            src={qqQrCode}
            alt=""
            className="author-promo-qq-thumb"
            aria-hidden="true"
          />
          <span className="author-promo-qq-label">
            <span className="author-promo-qq-title">联系作者</span>
            <span className="author-promo-qq-number">QQ {QQ_NUMBER}</span>
          </span>
        </button>
      </div>

      {qrOpen ? (
        <div
          className="author-promo-qr-overlay"
          onClick={() => setQrOpen(false)}
          role="presentation"
        >
          <div
            className="author-promo-qr-card"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-label="QQ 二维码"
          >
            <button
              type="button"
              className="author-promo-qr-close"
              onClick={() => setQrOpen(false)}
              aria-label="关闭"
            >
              <X size={16} />
            </button>
            <img src={qqQrCode} alt={`QQ 二维码 ${QQ_NUMBER}`} className="author-promo-qr-full" />
            <p className="author-promo-qr-caption">扫一扫，加我为好友</p>
            <p className="author-promo-qr-id">QQ：{QQ_NUMBER}</p>
            <button type="button" className="author-promo-qr-shop" onClick={openShop}>
              前往卡网选购
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

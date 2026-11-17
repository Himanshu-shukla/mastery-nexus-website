import Link from "next/link";
import type { CatalogItem } from "@/lib/catalog";
import { ClockIcon, GaugeIcon } from "./icons";

const kindClass: Record<CatalogItem["kind"], string> = {
  Module: "mxCard__label--module",
  Project: "mxCard__label--project",
  "Career support": "mxCard__label--career",
  Guide: "mxCard__label--guide"
};

export default function CourseCard({ item, showNew = false }: { item: CatalogItem; showNew?: boolean }) {
  return (
    <Link href={item.href} className="mxCard">
      <div className={`mxCard__label ${kindClass[item.kind]}`}>
        <span>{item.kind}</span>
        {showNew && item.isNew && <span className="mxNew">NEW</span>}
      </div>
      <div className="mxCard__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt="" loading="lazy" />
        <span className="mxCard__logo">
          <i style={{ background: item.toolColor }} aria-hidden="true" />
          {item.tool}
        </span>
      </div>
      <div className="mxCard__body">
        <h3 className="mxCard__title">{item.title}</h3>
        <p className="mxCard__provider">{item.provider}</p>
        <ul className="mxCard__meta">
          {item.duration && <li><ClockIcon size={18} />{item.duration}</li>}
          {item.level && <li><GaugeIcon size={18} />{item.level}</li>}
        </ul>
      </div>
    </Link>
  );
}

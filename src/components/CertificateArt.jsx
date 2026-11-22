import React, { useId } from 'react';
import mark from '../assets/logo/moraled-mark.png';

/*
 * Text-free certificate illustrations (no names, dates, signatures or wording) — used instead of
 * real certificate images wherever a design is only being shown as an example.
 * Same artwork as the coming-soon page (coming-soon/index.html, ivory + navy) plus a sky variant.
 *
 * Colours: the blues, navy and orange match src/styles/tokens.css; gold and paper tones exist only
 * in these illustrations. SVG gradients need document-unique ids, so each instance prefixes them
 * with useId() (the same variant can be in the gallery and the preview dialog at the same time).
 */
const STAR = 'M0-10 2.35-3.24 9.51-3.09 3.8 1.24 5.88 8.09 0 4-5.88 8.09-3.8 1.24-9.51-3.09-2.35-3.24Z';

function Corners({ fill }) {
  return (
    <g fill={fill}>
      {[[21, 21], [279, 21], [21, 399], [279, 399]].map(([x, y]) => (
        <rect key={x + '-' + y} x={x - 5.5} y={y - 5.5} width="11" height="11" transform={`rotate(45 ${x} ${y})`} />
      ))}
    </g>
  );
}

function Lines({ y, color, opacity }) {
  return (
    <g fill={color} fillOpacity={opacity}>
      <rect x="48" y={y} width="204" height="5" rx="2.5" />
      <rect x="58" y={y + 14} width="184" height="5" rx="2.5" />
      <rect x="84" y={y + 28} width="132" height="5" rx="2.5" />
    </g>
  );
}

function Chips({ y, fill, opacity, dot }) {
  const xs = [52, 122, 192];
  return (
    <>
      <g fill={fill} fillOpacity={opacity}>{xs.map((x) => <rect key={x} x={x} y={y} width="56" height="20" rx="10" />)}</g>
      <g fill={dot}>{xs.map((x) => <circle key={x} cx={x + 12} cy={y + 10} r="4" />)}</g>
    </>
  );
}

function Signature({ x = 44, y, color, opacity = 1, lineOpacity }) {
  return (
    <>
      <path d={`M${x} ${y}c9-17 17-19 19-7s6 11 12-3 10-13 12-1 9 5 15-5`} fill="none" stroke={color} strokeOpacity={opacity} strokeWidth="1.7" strokeLinecap="round" />
      <path d={`M${x - 4} ${y + 12}h86`} stroke={color} strokeOpacity={lineOpacity} />
    </>
  );
}

function Seal({ cy, ribbons, fill, ring, ringOpacity, star }) {
  const cx = 232;
  return (
    <>
      <path d={`M${cx - 16} ${cy + 18}l-11 40 15-8 9 13 5-41z`} fill={ribbons[0]} />
      <path d={`M${cx + 16} ${cy + 18}l11 40-15-8-9 13-5-41z`} fill={ribbons[1]} />
      <circle cx={cx} cy={cy} r="28" fill={fill} />
      <circle cx={cx} cy={cy} r="21" fill="none" stroke={ring} strokeOpacity={ringOpacity} strokeDasharray="2 3" />
      <path d={STAR} transform={`translate(${cx} ${cy + 1}) scale(1.15)`} fill={star} />
    </>
  );
}

function Partner({ id }) {
  const gold = `url(#${id}gold)`;
  return (
    <>
      <defs>
        <linearGradient id={`${id}paper`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fffdf8" /><stop offset="1" stopColor="#f2e5c8" /></linearGradient>
        <linearGradient id={`${id}gold`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7de9c" /><stop offset=".5" stopColor="#c8963c" /><stop offset="1" stopColor="#ebc874" /></linearGradient>
      </defs>
      <rect width="300" height="420" rx="8" fill={`url(#${id}paper)`} />
      <g fill="none" stroke="#c8963c" strokeOpacity=".13">
        <circle cx="150" cy="222" r="84" /><circle cx="150" cy="222" r="70" /><circle cx="150" cy="222" r="56" /><circle cx="150" cy="222" r="42" strokeDasharray="3 4" />
      </g>
      <rect x="11" y="11" width="278" height="398" rx="5" fill="none" stroke={gold} strokeWidth="4" />
      <rect x="21" y="21" width="258" height="378" rx="2" fill="none" stroke="#0b1b4d" strokeOpacity=".3" />
      <Corners fill={gold} />
      <image href={mark} x="119" y="36" width="62" height="56" />
      <rect x="66" y="108" width="168" height="13" rx="6.5" fill={gold} />
      <rect x="98" y="130" width="104" height="6" rx="3" fill="#0b1b4d" fillOpacity=".32" />
      <path d="M78 156h58m28 0h58" stroke="#c8963c" strokeWidth="1.3" />
      <rect x="145" y="151" width="10" height="10" transform="rotate(45 150 156)" fill="#c8963c" />
      <rect x="56" y="178" width="188" height="15" rx="7.5" fill="#0045a2" fillOpacity=".88" />
      <Lines y={210} color="#0b1b4d" opacity=".2" />
      <Chips y={272} fill="#0b1b4d" opacity=".18" dot="#c8963c" />
      <Signature y={352} color="#0b1b4d" lineOpacity=".4" />
      <Seal cy={338} ribbons={['#0045a2', '#00266d']} fill={gold} ring="#fff6dc" ringOpacity=".85" star="#fff6dc" />
    </>
  );
}

function Character({ id }) {
  const blue = `url(#${id}blue)`;
  // One corner wave (top right); the bottom-left one is the same shape rotated 180°.
  const wave = (
    <>
      <path d="M150 0H300V140C276 70 222 22 150 0Z" fill="#c9e0fb" />
      <path d="M196 0H300V96C282 50 246 16 196 0Z" fill={blue} />
      <path d="M232 0C262 12 284 32 300 58" fill="none" stroke="#ffffff" strokeOpacity=".55" strokeWidth="1.5" />
    </>
  );
  return (
    <>
      <defs>
        <linearGradient id={`${id}paper`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#e4effc" /></linearGradient>
        <linearGradient id={`${id}blue`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#007ae1" /><stop offset="1" stopColor="#003a8c" /></linearGradient>
        <clipPath id={`${id}clip`}><rect width="300" height="420" rx="8" /></clipPath>
      </defs>
      <rect width="300" height="420" rx="8" fill={`url(#${id}paper)`} />
      <g fill="none" stroke="#0045a2" strokeOpacity=".08">
        <circle cx="150" cy="232" r="86" /><circle cx="150" cy="232" r="70" /><circle cx="150" cy="232" r="54" strokeDasharray="3 4" />
      </g>
      <rect x="16" y="16" width="268" height="388" rx="4" fill="none" stroke="#0045a2" strokeOpacity=".28" />
      <g clipPath={`url(#${id}clip)`}>
        {wave}
        <g transform="rotate(180 150 210)">{wave}</g>
      </g>
      <image href={mark} x="119" y="34" width="62" height="56" />
      <rect x="66" y="104" width="168" height="13" rx="6.5" fill="#00266d" />
      <rect x="98" y="125" width="104" height="5" rx="2.5" fill="#0045a2" fillOpacity=".35" />
      <rect x="86" y="142" width="128" height="26" rx="13" fill="#e4effc" stroke="#7fb8ff" />
      <circle cx="101" cy="155" r="8" fill={blue} />
      <rect x="114" y="149.5" width="56" height="4" rx="2" fill="#00266d" fillOpacity=".55" />
      <rect x="114" y="156.5" width="38" height="4" rx="2" fill="#00266d" fillOpacity=".3" />
      <g fill="#0045a2">
        <path d={STAR} transform="translate(186 155) scale(.55)" />
        <path d={STAR} transform="translate(200 155) scale(.55)" />
      </g>
      <rect x="56" y="184" width="188" height="15" rx="7.5" fill="#00266d" fillOpacity=".9" />
      <Lines y={216} color="#00266d" opacity=".18" />
      <Chips y={274} fill="#0045a2" opacity=".1" dot="#0045a2" />
      <Signature x={110} y={350} color="#00266d" lineOpacity=".4" />
      <Seal cy={338} ribbons={['#007ae1', '#0045a2']} fill={blue} ring="#ffffff" ringOpacity=".8" star="#ffffff" />
    </>
  );
}

function Distinguished({ id }) {
  const gold = `url(#${id}gold)`;
  return (
    <>
      <defs>
        <linearGradient id={`${id}paper`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0b1b4d" /><stop offset="1" stopColor="#16367f" /></linearGradient>
        <linearGradient id={`${id}gold`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffe3a3" /><stop offset=".5" stopColor="#d4a24a" /><stop offset="1" stopColor="#f3cf7c" /></linearGradient>
      </defs>
      <rect width="300" height="420" rx="8" fill={`url(#${id}paper)`} />
      <g fill="none" stroke="#f3cf7c" strokeOpacity=".1">
        <circle cx="150" cy="226" r="88" /><circle cx="150" cy="226" r="72" /><circle cx="150" cy="226" r="56" strokeDasharray="3 4" />
      </g>
      <rect x="11" y="11" width="278" height="398" rx="5" fill="none" stroke={gold} strokeWidth="4" />
      <rect x="21" y="21" width="258" height="378" rx="2" fill="none" stroke="#f3cf7c" strokeOpacity=".35" />
      <Corners fill={gold} />
      <circle cx="150" cy="66" r="36" fill="#fffdf8" />
      <circle cx="150" cy="66" r="36" fill="none" stroke={gold} strokeWidth="3" />
      <image href={mark} x="126" y="45" width="48" height="43" />
      <g fill="none" stroke={gold} strokeWidth="2" strokeLinecap="round"><path d="M104 92c-8-10-10-24-4-36" /><path d="M196 92c8-10 10-24 4-36" /></g>
      <g fill={gold}>
        <ellipse cx="101" cy="80" rx="4" ry="7" transform="rotate(-35 101 80)" /><ellipse cx="99" cy="66" rx="4" ry="7" transform="rotate(-10 99 66)" />
        <ellipse cx="199" cy="80" rx="4" ry="7" transform="rotate(35 199 80)" /><ellipse cx="201" cy="66" rx="4" ry="7" transform="rotate(10 201 66)" />
      </g>
      <rect x="62" y="120" width="176" height="13" rx="6.5" fill={gold} />
      <rect x="96" y="142" width="108" height="6" rx="3" fill="#ffffff" fillOpacity=".35" />
      <g fill={gold}>
        <path d={STAR} transform="translate(130 168) scale(.75)" />
        <path d={STAR} transform="translate(150 166) scale(.95)" />
        <path d={STAR} transform="translate(170 168) scale(.75)" />
      </g>
      <rect x="56" y="190" width="188" height="15" rx="7.5" fill="#ffffff" fillOpacity=".92" />
      <Lines y={222} color="#ffffff" opacity=".24" />
      <Chips y={282} fill="#ffffff" opacity=".12" dot="#f3cf7c" />
      <Signature y={354} color="#ffffff" opacity=".85" lineOpacity=".35" />
      <Seal cy={340} ribbons={['#ff7a1a', '#e8620f']} fill={gold} ring="#0b1b4d" ringOpacity=".45" star="#0b1b4d" />
    </>
  );
}

const VARIANTS = { partner: Partner, character: Character, distinguished: Distinguished };

/** variant: 'partner' | 'character' | 'distinguished'; label: accessible name (role="img"). */
export default function CertificateArt({ variant, label, className = '' }) {
  const id = 'ca' + useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const Art = VARIANTS[variant] ?? Partner;
  return (
    <svg className={('cert-art ' + className).trim()} viewBox="0 0 300 420" role="img" aria-label={label}>
      <Art id={id} />
    </svg>
  );
}

import React, { useRef, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
interface WaterDropProps {
  color?: string;
  height?: number;
  density?: number;
  frequency?: number;
}

const WaterDrop: React.FC<WaterDropProps> = ({
  color = "#1c1f2f",
  height = 150,
  density = 0.1,
  frequency = 20,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = height;

    const drops: Array<{
      x: number;
      y: number;
      radius: number;
      rippleRadius: number;
      opacity: number;
      growing: boolean;
    }> = [];

    const createDrop = (x: number, y: number) => {
      drops.push({
        x,
        y,
        radius: 2,
        rippleRadius: 0,
        opacity: 1,
        growing: true,
      });
    };

    const generateRandomDrop = () => {
      if (Math.random() < density) {
        createDrop(Math.random() * canvas.width, Math.random() * (height / 2));
      }
    };

    // hex -> rgb helpers
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[22], 16),
            g: parseInt(result[23], 16),
            b: parseInt(result[24], 16),
          }
        : null;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = drops.length - 1; i >= 0; i--) {
        const drop = drops[i];

        if (drop.growing) {
          drop.rippleRadius += 2;
          drop.opacity -= 0.02;
          if (drop.opacity <= 0) {
            drops.splice(i, 1);
            continue;
          }
        }

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.rippleRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${hexToRgb(color)?.r || 28}, ${
          hexToRgb(color)?.g || 31
        }, ${hexToRgb(color)?.b || 47}, ${drop.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(color)?.r || 28}, ${
          hexToRgb(color)?.g || 31
        }, ${hexToRgb(color)?.b || 47}, ${drop.opacity * 2})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    const dropInterval = setInterval(generateRandomDrop, 1000 / frequency);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      clearInterval(dropInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [color, height, density, frequency]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full pointer-events-none z-10"
      style={{ height: `${height}px` }}
    />
  );
};

const Footer: React.FC = () => {
  const [state, handleSubmit] = useForm("mvgbjwyo");
  const LGBTQ_SYMBOLS = [
    "♀",
    "♂",
    "⚧",
    "⚥",
    "⚢",
    "⚣",
    "⚧",
    "♀",
    "♂",
    "⚥",
    "⚢",
    "⚣",
  ];

  // Bubbles config (stable per mount)
  const [bubbles] = useState(() =>
    Array.from({ length: 96 }).map(() => ({
      size: +(2 + Math.random() * 4).toFixed(2), // rem
      distance: +(6 + Math.random() * 4).toFixed(2), // rem
      position: +(-5 + Math.random() * 110).toFixed(2), // %
      time: +(2 + Math.random() * 2).toFixed(2), // s
      delay: +(-1 * (2 + Math.random() * 2)).toFixed(2), // s
    }))
  );

  return (
    <div id="contact" className="relative">
      <style>{`
        /* Flaticon UIcons (brands) */
        @import url('https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css');

        /* Subtle grid */
        .footer-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.06) 0,
              rgba(255,255,255,0.06) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.06) 0,
              rgba(255,255,255,0.06) 1px,
              transparent 1px,
              transparent 40px
            );
        }

        /* Soft top fade */
        .footer-top-fade {
          position: absolute;
          left: 0;
          right: 0;
          top: -96px;
          height: 140px;
          pointer-events: none;
          z-index: 12;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(31,41,55,0.15) 25%,
            rgba(31,41,55,0.45) 60%,
            rgba(31,41,55,0.75) 85%,
            rgba(31,41,55,1) 100%
          );
        }
        @media (max-width: 640px) { .footer-top-fade { top: -72px; height: 110px; } }

        /* Floating symbols */
        .footer-floating-symbols {
          position: absolute;
          inset: 0;
          z-index: 15;
          pointer-events: none;
          overflow: hidden;
          color: rgba(255,255,255,0.5);
          font-family: Inter, system-ui, sans-serif;
        }
        .footer-floating-symbols span {
          position: absolute;
          top: 100vh;
          font-size: clamp(18px, 2.8vw, 56px);
          opacity: 0.45;
          text-shadow:
            0 0 3px rgba(0,0,0,0.35),
            0 1px 2px rgba(0,0,0,0.25);
          -webkit-text-stroke: 0.5px rgba(0,0,0,0.35);
          animation: footerFloatY var(--dur, 22s) linear infinite;
          animation-delay: var(--delay, 0s);
          will-change: transform;
        }
        .footer-floating-symbols span:nth-child(1)  { left: 5%;  --dur: 24s; --delay: -2s; }
        .footer-floating-symbols span:nth-child(2)  { left: 15%; --dur: 28s; --delay: -6s; }
        .footer-floating-symbols span:nth-child(3)  { left: 25%; --dur: 20s; --delay: -4s; }
        .footer-floating-symbols span:nth-child(4)  { left: 35%; --dur: 26s; --delay: -10s; }
        .footer-floating-symbols span:nth-child(5)  { left: 45%; --dur: 22s; --delay: -8s; }
        .footer-floating-symbols span:nth-child(6)  { left: 55%; --dur: 30s; --delay: -12s; }
        .footer-floating-symbols span:nth-child(7)  { left: 65%; --dur: 24s; --delay: -14s; }
        .footer-floating-symbols span:nth-child(8)  { left: 75%; --dur: 26s; --delay: -3s; }
        .footer-floating-symbols span:nth-child(9)  { left: 85%; --dur: 21s; --delay: -7s; }
        .footer-floating-symbols span:nth-child(10) { left: 12%; --dur: 27s; --delay: -1s; }
        .footer-floating-symbols span:nth-child(11) { left: 52%; --dur: 23s; --delay: -9s; }
        .footer-floating-symbols span:nth-child(12) { left: 82%; --dur: 29s; --delay: -5s; }

        @keyframes footerFloatY {
          from { transform: translateY(10vh) rotate(0deg); }
          to   { transform: translateY(-115vh) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .footer-floating-symbols span { animation: none !important; transform: none !important; }
        }

        /* Social expand buttons */
        .social-links { display:flex; justify-content:center; align-items:center; gap:16px; }
        .social-btn {
          cursor:pointer; height:56px; width:56px;
          display:inline-flex; align-items:center; justify-content:center;
          gap:10px; color:#e5e7eb;
          border-radius:14px; box-shadow:0 6px 20px rgba(0,0,0,0.18);
          background:rgba(31,41,55,0.55); backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,0.08);
          transition: width .45s cubic-bezier(.19,1,.22,1), background-color .3s ease, transform .2s ease, justify-content .2s ease, padding .2s ease;
          overflow:hidden; text-decoration:none; position:relative; z-index:20;
        }
        .social-btn span { width:0; overflow:hidden; white-space:nowrap; transition: width .45s cubic-bezier(.19,1,.22,1), padding .3s ease, opacity .2s ease; opacity:0; }
        .social-btn:hover { width:180px; border-radius:12px; transform:translateY(-2px); justify-content:flex-start; padding-left:14px; }
        .social-btn:hover span { padding:2px 8px; width:max-content; opacity:1; }
        .social-btn i { font-size:24px; line-height:1; display:inline-block; }
        #facebook i  { color:#1877F2; }
        #instagram i { color:#E4405F; transform:scale(1.15); transform-origin:center; }
        #youtube i   { color:#FF0000; }

        /* Fancy mail link */
        .fancy-mail.link { height:30px; align-items:center; color:#f3f4f6; text-decoration:none; display:inline-flex; font-weight:700; position:relative; z-index:20; }
        .fancy-mail .mask { position:relative; padding:0; height:20px; overflow:hidden; }
        .fancy-mail .link-container { transition: transform .4s ease; }
        .fancy-mail .title { display:block; font-size:16px; line-height:20px; transition: transform .4s ease; }
        .fancy-mail .link-title1 { transform-origin:right center; }
        .fancy-mail .link-title2 { transform-origin:left center; transform:rotate(20deg); }
        .fancy-mail .link-icon { position:relative; width:30px; height:30px; background:#f8f8ff; border-radius:50%; display:flex; justify-content:center; align-items:center; margin-left:10px; overflow:hidden; }
        .fancy-mail .icon { display:block; position:absolute; width:18px; height:18px; fill:#111827; transition: transform .4s ease; }
        .fancy-mail .icon:nth-child(2) { transform: translate(-40px); }
        .fancy-mail:hover .link-container { transform: translateY(-20px); }
        .fancy-mail:hover .link-title1 { transform: rotate(20deg); }
        .fancy-mail:hover .link-title2 { transform: rotate(0); }
        .fancy-mail:hover .icon:first-child { transform: translate(40px); }
        .fancy-mail:hover .icon:nth-child(2) { transform: translate(0px); }

        /* Bubbles row */
        .footer-bubbles-row { position: relative; isolation: isolate; overflow: hidden; background: transparent; }
        .footer-bubbles { position: relative; height: 10rem; filter: url("#footer-blob-filter"); }
        .footer-bubble {
          position: absolute;
          bottom: -4rem;
          left: var(--position, 50%);
          transform: translateX(-50%);
          width: var(--size, 4rem);
          height: var(--size, 4rem);
          background: var(--bubble-color, #A855F7); /* purple */
          border-radius: 9999px;
          animation:
            bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s),
            bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
          will-change: transform, width, height;
        }
        @keyframes bubble-size { 0%, 75% { width: var(--size, 4rem); height: var(--size, 4rem); } 100% { width: 0rem; height: 0rem; } }
        @keyframes bubble-move { 0% { bottom: -4rem; } 100% { bottom: var(--distance, 10rem); } }
      `}</style>

      {/* Footer wrapper: pt-12 pb-0 removes the extra bottom space */}
      <footer
        id="footer"
        className="relative isolate bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-0 z-[25] overflow-visible"
      >
        <div className="footer-top-fade" aria-hidden="true" />
        <div className="footer-grid" aria-hidden="true" />

        <div className="footer-floating-symbols" aria-hidden="true">
          {LGBTQ_SYMBOLS.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>

        <WaterDrop color="#1c1f2f" height={150} density={0.1} frequency={20} />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-bold text-white inline-block relative pb-2">
                Address
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
              </h3>

              <div className="space-y-2 mt-4">
                <p className="text-gray-200 text-base sm:text-lg md:text-xl/7 font-medium">
                  10 sahid Binoy bose road
                </p>
                <p className="text-gray-200 text-base sm:text-lg md:text-xl/7 font-medium">
                  Pin 700070, Kolkata
                </p>

                <a
                  href="mailto:bds.westbengal2014@gmail.com"
                  className="fancy-mail link mt-2"
                  aria-label="Email bds.westbengal2014@gmail.com"
                >
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">
                        bds.westbengal2014@gmail.com
                      </span>
                      <span className="link-title2 title">
                        bds.westbengal2014@gmail.com
                      </span>
                    </div>
                  </span>
                  <div className="link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236H0v1h21.883z" />
                    </svg>
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236H0v1h21.883z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Email form */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-bold text-white inline-block relative pb-2">
                Email Us
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#A855F7] to-transparent"></span>
              </h3>

              {state.succeeded ? (
                <div className="mt-4 p-4 bg-green-500 bg-opacity-20 rounded-xl text-green-200 text-center">
                  <p className="text-lg font-medium">
                    Thanks for reaching out!
                  </p>
                  <p className="mt-2">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />

                  <div className="flex space-x-2">
                    <select
                      id="countryCode"
                      name="countryCode"
                      className="w-1/4 px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                      defaultValue="+91"
                    >
                      <option value="+93">Afghanistan (+93)</option>
                      <option value="+355">Albania (+355)</option>
                      <option value="+213">Algeria (+213)</option>
                      <option value="+376">Andorra (+376)</option>
                      <option value="+244">Angola (+244)</option>
                      <option value="+1-268">
                        Antigua and Barbuda (+1-268)
                      </option>
                      <option value="+54">Argentina (+54)</option>
                      <option value="+374">Armenia (+374)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+43">Austria (+43)</option>
                      <option value="+994">Azerbaijan (+994)</option>
                      <option value="+1-242">Bahamas (+1-242)</option>
                      <option value="+973">Bahrain (+973)</option>
                      <option value="+880">Bangladesh (+880)</option>
                      <option value="+1-246">Barbados (+1-246)</option>
                      <option value="+375">Belarus (+375)</option>
                      <option value="+32">Belgium (+32)</option>
                      <option value="+501">Belize (+501)</option>
                      <option value="+229">Benin (+229)</option>
                      <option value="+975">Bhutan (+975)</option>
                      <option value="+591">Bolivia (+591)</option>
                      <option value="+387">
                        Bosnia and Herzegovina (+387)
                      </option>
                      <option value="+267">Botswana (+267)</option>
                      <option value="+55">Brazil (+55)</option>
                      <option value="+673">Brunei (+673)</option>
                      <option value="+359">Bulgaria (+359)</option>
                      <option value="+226">Burkina Faso (+226)</option>
                      <option value="+257">Burundi (+257)</option>
                      <option value="+855">Cambodia (+855)</option>
                      <option value="+237">Cameroon (+237)</option>
                      <option value="+1">Canada (+1)</option>
                      <option value="+238">Cape Verde (+238)</option>
                      <option value="+236">
                        Central African Republic (+236)
                      </option>
                      <option value="+235">Chad (+235)</option>
                      <option value="+56">Chile (+56)</option>
                      <option value="+86">China (+86)</option>
                      <option value="+57">Colombia (+57)</option>
                      <option value="+269">Comoros (+269)</option>
                      <option value="+242">Congo (+242)</option>
                      <option value="+243">Congo, Dem. Rep. (+243)</option>
                      <option value="+506">Costa Rica (+506)</option>
                      <option value="+225">Côte d’Ivoire (+225)</option>
                      <option value="+385">Croatia (+385)</option>
                      <option value="+53">Cuba (+53)</option>
                      <option value="+357">Cyprus (+357)</option>
                      <option value="+420">Czech Republic (+420)</option>
                      <option value="+45">Denmark (+45)</option>
                      <option value="+253">Djibouti (+253)</option>
                      <option value="+1-767">Dominica (+1-767)</option>
                      <option value="+1-809">
                        Dominican Republic (+1-809)
                      </option>
                      <option value="+593">Ecuador (+593)</option>
                      <option value="+20">Egypt (+20)</option>
                      <option value="+503">El Salvador (+503)</option>
                      <option value="+240">Equatorial Guinea (+240)</option>
                      <option value="+291">Eritrea (+291)</option>
                      <option value="+372">Estonia (+372)</option>
                      <option value="+251">Ethiopia (+251)</option>
                      <option value="+679">Fiji (+679)</option>
                      <option value="+358">Finland (+358)</option>
                      <option value="+33">France (+33)</option>
                      <option value="+241">Gabon (+241)</option>
                      <option value="+220">Gambia (+220)</option>
                      <option value="+995">Georgia (+995)</option>
                      <option value="+49">Germany (+49)</option>
                      <option value="+233">Ghana (+233)</option>
                      <option value="+30">Greece (+30)</option>
                      <option value="+1-473">Grenada (+1-473)</option>
                      <option value="+502">Guatemala (+502)</option>
                      <option value="+224">Guinea (+224)</option>
                      <option value="+245">Guinea-Bissau (+245)</option>
                      <option value="+592">Guyana (+592)</option>
                      <option value="+509">Haiti (+509)</option>
                      <option value="+504">Honduras (+504)</option>
                      <option value="+36">Hungary (+36)</option>
                      <option value="+354">Iceland (+354)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+62">Indonesia (+62)</option>
                      <option value="+98">Iran (+98)</option>
                      <option value="+964">Iraq (+964)</option>
                      <option value="+353">Ireland (+353)</option>
                      <option value="+972">Israel (+972)</option>
                      <option value="+39">Italy (+39)</option>
                      <option value="+1-876">Jamaica (+1-876)</option>
                      <option value="+81">Japan (+81)</option>
                      <option value="+962">Jordan (+962)</option>
                      <option value="+7">Kazakhstan (+7)</option>
                      <option value="+254">Kenya (+254)</option>
                      <option value="+686">Kiribati (+686)</option>
                      <option value="+965">Kuwait (+965)</option>
                      <option value="+996">Kyrgyzstan (+996)</option>
                      <option value="+856">Laos (+856)</option>
                      <option value="+371">Latvia (+371)</option>
                      <option value="+961">Lebanon (+961)</option>
                      <option value="+266">Lesotho (+266)</option>
                      <option value="+231">Liberia (+231)</option>
                      <option value="+218">Libya (+218)</option>
                      <option value="+423">Liechtenstein (+423)</option>
                      <option value="+370">Lithuania (+370)</option>
                      <option value="+352">Luxembourg (+352)</option>
                      <option value="+261">Madagascar (+261)</option>
                      <option value="+265">Malawi (+265)</option>
                      <option value="+60">Malaysia (+60)</option>
                      <option value="+960">Maldives (+960)</option>
                      <option value="+223">Mali (+223)</option>
                      <option value="+356">Malta (+356)</option>
                      <option value="+692">Marshall Islands (+692)</option>
                      <option value="+222">Mauritania (+222)</option>
                      <option value="+230">Mauritius (+230)</option>
                      <option value="+52">Mexico (+52)</option>
                      <option value="+691">Micronesia (+691)</option>
                      <option value="+373">Moldova (+373)</option>
                      <option value="+377">Monaco (+377)</option>
                      <option value="+976">Mongolia (+976)</option>
                      <option value="+382">Montenegro (+382)</option>
                      <option value="+212">Morocco (+212)</option>
                      <option value="+258">Mozambique (+258)</option>
                      <option value="+95">Myanmar (+95)</option>
                      <option value="+264">Namibia (+264)</option>
                      <option value="+674">Nauru (+674)</option>
                      <option value="+977">Nepal (+977)</option>
                      <option value="+31">Netherlands (+31)</option>
                      <option value="+64">New Zealand (+64)</option>
                      <option value="+505">Nicaragua (+505)</option>
                      <option value="+227">Niger (+227)</option>
                      <option value="+234">Nigeria (+234)</option>
                      <option value="+47">Norway (+47)</option>
                      <option value="+968">Oman (+968)</option>
                      <option value="+92">Pakistan (+92)</option>
                      <option value="+680">Palau (+680)</option>
                      <option value="+970">Palestine (+970)</option>
                      <option value="+507">Panama (+507)</option>
                      <option value="+675">Papua New Guinea (+675)</option>
                      <option value="+595">Paraguay (+595)</option>
                      <option value="+51">Peru (+51)</option>
                      <option value="+63">Philippines (+63)</option>
                      <option value="+48">Poland (+48)</option>
                      <option value="+351">Portugal (+351)</option>
                      <option value="+974">Qatar (+974)</option>
                      <option value="+40">Romania (+40)</option>
                      <option value="+7">Russia (+7)</option>
                      <option value="+250">Rwanda (+250)</option>
                      <option value="+1-869">
                        Saint Kitts and Nevis (+1-869)
                      </option>
                      <option value="+1-758">Saint Lucia (+1-758)</option>
                      <option value="+1-784">Saint Vincent (+1-784)</option>
                      <option value="+685">Samoa (+685)</option>
                      <option value="+378">San Marino (+378)</option>
                      <option value="+239">São Tomé and Príncipe (+239)</option>
                      <option value="+966">Saudi Arabia (+966)</option>
                      <option value="+221">Senegal (+221)</option>
                      <option value="+381">Serbia (+381)</option>
                      <option value="+248">Seychelles (+248)</option>
                      <option value="+232">Sierra Leone (+232)</option>
                      <option value="+65">Singapore (+65)</option>
                      <option value="+421">Slovakia (+421)</option>
                      <option value="+386">Slovenia (+386)</option>
                      <option value="+677">Solomon Islands (+677)</option>
                      <option value="+252">Somalia (+252)</option>
                      <option value="+27">South Africa (+27)</option>
                      <option value="+82">South Korea (+82)</option>
                      <option value="+211">South Sudan (+211)</option>
                      <option value="+34">Spain (+34)</option>
                      <option value="+94">Sri Lanka (+94)</option>
                      <option value="+249">Sudan (+249)</option>
                      <option value="+597">Suriname (+597)</option>
                      <option value="+268">Swaziland (+268)</option>
                      <option value="+46">Sweden (+46)</option>
                      <option value="+41">Switzerland (+41)</option>
                      <option value="+963">Syria (+963)</option>
                      <option value="+886">Taiwan (+886)</option>
                      <option value="+992">Tajikistan (+992)</option>
                      <option value="+255">Tanzania (+255)</option>
                      <option value="+66">Thailand (+66)</option>
                      <option value="+228">Togo (+228)</option>
                      <option value="+676">Tonga (+676)</option>
                      <option value="+1-868">
                        Trinidad and Tobago (+1-868)
                      </option>
                      <option value="+216">Tunisia (+216)</option>
                      <option value="+90">Turkey (+90)</option>
                      <option value="+993">Turkmenistan (+993)</option>
                      <option value="+688">Tuvalu (+688)</option>
                      <option value="+256">Uganda (+256)</option>
                      <option value="+380">Ukraine (+380)</option>
                      <option value="+971">United Arab Emirates (+971)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+1">United States (+1)</option>
                      <option value="+598">Uruguay (+598)</option>
                      <option value="+998">Uzbekistan (+998)</option>
                      <option value="+678">Vanuatu (+678)</option>
                      <option value="+379">Vatican City (+379)</option>
                      <option value="+58">Venezuela (+58)</option>
                      <option value="+84">Vietnam (+84)</option>
                      <option value="+967">Yemen (+967)</option>
                      <option value="+260">Zambia (+260)</option>
                      <option value="+263">Zimbabwe (+263)</option>
                    </select>

                    <input
                      id="contactNumber"
                      type="tel"
                      name="contactNumber"
                      placeholder="Your contact number"
                      required
                      pattern="[0-9]{10}" // Basic 10-digit validation
                      title="Please enter a 10-digit phone number"
                      className="w-3/4 px-4 py-3 rounded-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600"
                    />
                  </div>
                  <ValidationError
                    prefix="Contact Number"
                    field="contactNumber"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-gray-600 resize-vertical"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="donate-button"
                  >
                    <span className="donate-button-bg">
                      <span className="donate-button-bg-layers">
                        <span className="donate-button-bg-layer donate-button-bg-layer-1"></span>
                        <span className="donate-button-bg-layer donate-button-bg-layer-2"></span>
                        <span className="donate-button-bg-layer donate-button-bg-layer-3"></span>
                      </span>
                    </span>
                    <span className="donate-button-inner">
                      <span className="donate-button-inner-static">
                        {state.submitting ? "Sending..." : "Send"}
                      </span>
                      <span className="donate-button-inner-hover">
                        {state.submitting ? "Sending..." : "Send"}
                      </span>
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="relative z-20 mt-8 pt-8 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  2025 ©{" "}
                  <a
                    href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    baishamyadurikoronsamiti
                  </a>
                </p>
              </div>

              <div className="hidden md:block"></div>

              <div className="text-center md:text-right">
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/share/1B1aSPhQvn/"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    id="facebook"
                    aria-label="Facebook"
                  >
                    <i className="fi fi-brands-facebook" aria-hidden="true"></i>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/bds.samabhabona?igsh=bzNic2w3YWoyNGlo"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    id="instagram"
                    aria-label="Instagram"
                  >
                    <i
                      className="fi fi-brands-instagram"
                      aria-hidden="true"
                    ></i>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://youtube.com/@bdssamabhabona?si=KSz7kyIDFi3rZLxk"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    id="youtube"
                    aria-label="YouTube"
                  >
                    <i className="fi fi-brands-youtube" aria-hidden="true"></i>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bubbles row (purple) */}
        <div className="footer-bubbles-row">
          <svg
            aria-hidden="true"
            focusable="false"
            className="absolute w-0 h-0"
          >
            <defs>
              <filter id="footer-blob-filter">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  result="blob"
                  type="matrix"
                  values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 19 -9"
                />
              </filter>
            </defs>
          </svg>

          {/* Set bubble color via CSS variable */}
          <div
            className="footer-bubbles"
            style={{ ["--bubble-color" as any]: "#A855F7" }}
          >
            {bubbles.map((b, i) => (
              <div
                key={i}
                className="footer-bubble"
                style={
                  {
                    ["--size" as any]: `${b.size}rem`,
                    ["--distance" as any]: `${b.distance}rem`,
                    ["--position" as any]: `${b.position}%`,
                    ["--time" as any]: `${b.time}s`,
                    ["--delay" as any]: `${b.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

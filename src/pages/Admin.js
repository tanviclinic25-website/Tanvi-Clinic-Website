import React from "react";
import "./Admin.css";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function Admin() {
  const banner = `${process.env.PUBLIC_URL}/Images/main-banner1.jpg`;

  const caduceus = `${process.env.PUBLIC_URL}/Images/icons8-caduceus-100.png`;
  const star = `${process.env.PUBLIC_URL}/Images/icons8-star-of-life-50.png`;
  const heart = `${process.env.PUBLIC_URL}/Images/icons8-heart-with-pulse-50.png`;
  const stethoscope = `${process.env.PUBLIC_URL}/Images/icons8-stethoscope-50.png`;

  return (
    <>
      <Navbar />

      <section
        className="adminHero"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.95), rgba(0,0,0,0.72), rgba(0,0,0,0.25)), url(${banner})`,
        }}
      >
        <div className="adminHeroContent">
          <h1 className="adminHeroTitle">Tanvi Skin & Health Skin</h1>

          <p className="adminHeroDesc">
            I am a dermatologist focused on advanced skin and hair care. My goal
            is to deliver personalized treatment plans, expert guidance, and
            long-term results that help you feel confident in your skin.
          </p>

          <div className="adminHeroActions">
            <button className="adminBtn primaryBtn">Manage Appointments</button>
            <button className="adminBtn secondaryBtn">View Patients</button>
          </div>
        </div>
      </section>



      <section className="split-banner-section">
        <div className="splitBannerHeadingWrap">
          <h2 className="splitBannerHeading">Explore Our Key Treatments</h2>
        </div>

        <div className="split-banner-inner">
          <div className="split-left">
            <img
              src={`${process.env.PUBLIC_URL}/Images/dermatology-clinic-banner.jpg`}
              alt="Dermatology Clinic"
            />
          </div>

          <div className="split-right">
            <a href="/treatments" className="split-right-card">
              <div className="split-right-media">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/acne-treatment-face-skincare-clinic.jpg`}
                  alt="Acne & Scar Care"
                />
              </div>
              <p className="split-right-text">Acne & Scar Care</p>
            </a>

            <a href="/treatments" className="split-right-card">
              <div className="split-right-media">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/pigmentation-treatment-skincare-face.jpg`}
                  alt="Pigmentation"
                />
              </div>
              <p className="split-right-text">Pigmentation Care</p>
            </a>

            <a href="/treatments" className="split-right-card">
              <div className="split-right-media">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/hair-loss-treatment-scalp-care-clinic.jpg`}
                  alt="Hair Fall"
                />
              </div>
              <p className="split-right-text">Hair Fall Treatment</p>
            </a>

            <a href="/treatments" className="split-right-card">
              <div className="split-right-media">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/laser-skin-treatment-aesthetic-clinic.jpg`}
                  alt="Laser & Aesthetic"
                />
              </div>
              <p className="split-right-text">Laser & Aesthetic</p>
            </a>

            <a href="/treatments" className="split-right-card">
              <div className="split-right-media">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/skin-allergy-rash-treatment-dermatology.jpg`}
                  alt="Skin Allergy"
                />
              </div>
              <p className="split-right-text">Skin Allergy Care</p>
            </a>

            <a href="/treatments" className="split-right-card">
              <div className="split-right-media">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/anti-aging-facial-treatment-clinic.jpg`}
                  alt="Anti Aging"
                />
              </div>
              <p className="split-right-text">Anti Aging Care</p>
            </a>
          </div>
        </div>
      </section>


      <section className="aboutSplit">
        <div className="aboutSplitInner">
          <div className="aboutLeft">
            <div className="aboutImageWrap">
              <img
                className="aboutCircleMain"
                src={`${process.env.PUBLIC_URL}/Images/circle1.jpg`}
                alt="Clinic"
              />
              <img
                className="aboutCircleSub"
                src={`${process.env.PUBLIC_URL}/Images/circle2.jpg`}
                alt="Care"
              />
              <div className="aboutGlow"></div>
              <div className="aboutDots"></div>
            </div>
          </div>

          <div className="aboutRight">
            <h2 className="aboutTitle">
              Advanced Dermatology For
              <br /> Skin, Hair & Aesthetic Care
            </h2>

            <p className="aboutText">
              At Tanvi Skin & Health Skin, every treatment is designed around your
              skin type, lifestyle, and long term goals. From acne correction and
              pigmentation care to hair restoration and advanced aesthetic solutions,
              you get expert support backed by modern dermatology.
            </p>

            <div className="aboutPoints">
              <div className="aboutPoint">
                <span className="pointTick"></span>
                <p>Personalized skin and hair treatment plans</p>
              </div>

              <div className="aboutPoint">
                <span className="pointTick"></span>
                <p>Clinical grade procedures with safe care</p>
              </div>

              <div className="aboutPoint">
                <span className="pointTick"></span>
                <p>Modern aesthetic solutions for confidence</p>
              </div>

              <div className="aboutPoint">
                <span className="pointTick"></span>
                <p>Transparent guidance and result driven follow ups</p>
              </div>
            </div>

            <div className="aboutActions">
              <button className="aboutBtn">More About Us</button>
              <button className="aboutBtn ghost">Explore Treatments</button>
            </div>
          </div>
        </div>
      </section>




      <section className="serviceGrid">
        <div className="serviceGridInner">
          <div className="serviceCard">
            <div className="serviceIcon">
              <img src={caduceus} alt="Medical icon" />
            </div>
            <h3 className="serviceTitle">Skin Treatments</h3>
            <p className="serviceDesc">
              Expert solutions for acne, pigmentation, eczema, and skin
              allergies with safe clinical care.
            </p>
          </div>

          <div className="serviceCard">
            <div className="serviceIcon">
              <img src={star} alt="Emergency icon" />
            </div>
            <h3 className="serviceTitle">Quick Consultation</h3>
            <p className="serviceDesc">
              Fast support for sudden rashes, itching, infections, and urgent
              skin flare-ups.
            </p>
          </div>

          <div className="serviceCard">
            <div className="serviceIcon">
              <img src={heart} alt="Professional care icon" />
            </div>
            <h3 className="serviceTitle">Hair & Scalp Care</h3>
            <p className="serviceDesc">
              Treatments for hair fall, dandruff, scalp irritation, and growth
              plans that work long-term.
            </p>
          </div>

          <div className="serviceCard">
            <div className="serviceIcon">
              <img src={stethoscope} alt="Doctor icon" />
            </div>
            <h3 className="serviceTitle">Trusted Dermatologist</h3>
            <p className="serviceDesc">
              Certified expertise, safe procedures, modern methods, and
              patient-first care you can trust.
            </p>
          </div>
        </div>
      </section>






      <section className="ownersNeo">
        <div className="ownersNeoGlow"></div>

        <div className="ownersNeoInner">
          <div className="ownersNeoHeadingWrap">
            <h2 className="ownersNeoHeading">Meet Our Clinic Owners</h2>
          </div>

          <div className="ownersNeoGrid">
            <div className="ownerNeoCard">
              <div className="ownerNeoBorder"></div>

              <div className="ownerNeoRarity">
                <span className="ownerNeoGem"></span>
                <span className="ownerNeoGem"></span>
                <span className="ownerNeoGem"></span>
              </div>

              <div className="ownerNeoType">Founder</div>

              <div className="ownerNeoFrame">
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>

                <img
                  src={`${process.env.PUBLIC_URL}/Images/doctor-hareen-kumar.jpeg`}
                  alt="Dr. Hareen Kumar"
                  className="ownerNeoImg"
                />

                <div className="ownerNeoFrameDark"></div>
                <div className="ownerNeoShine"></div>
                <div className="ownerNeoScanlines"></div>
                <div className="ownerNeoHolo"></div>
              </div>

              <div className="ownerNeoBody">
                <div className="ownerNeoName">Dr. Hareen Kumar Regulavalasa</div>

                <div className="ownerNeoStats">
                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">🩺</div>
                    <div className="ownerNeoStatValue">MD</div>
                    <div className="ownerNeoStatLabel">Medicine</div>
                  </div>

                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">🏥</div>
                    <div className="ownerNeoStatValue">6+</div>
                    <div className="ownerNeoStatLabel">Years</div>
                  </div>

                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">💉</div>
                    <div className="ownerNeoStatValue">AIG</div>
                    <div className="ownerNeoStatLabel">FAIG</div>
                  </div>

                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">✅</div>
                    <div className="ownerNeoStatValue">Care</div>
                    <div className="ownerNeoStatLabel">Trusted</div>
                  </div>
                </div>

                <div className="ownerNeoAbility">
                  <div className="ownerNeoAbilityHeader">
                    <div className="ownerNeoAbilityIcon">💠</div>
                    <div className="ownerNeoAbilityName">Clinical Profile</div>
                    <div className="ownerNeoAbilityCost">Senior</div>
                  </div>

                  <div className="ownerNeoAbilityDesc">
                    <p><span>Qualification:</span> MBBS, MD (General Medicine)</p>
                    <p><span>Fellowships:</span> Primary Care Rheumatology, CCEBDM, FAIG</p>
                    <p><span>Expertise:</span> Diabetes, Hypertension, Infectious Diseases, Lifestyle Disorders</p>
                    <p><span>Position:</span> Co-Founder, Tanvi Skin & Health Clinic</p>
                  </div>
                </div>

                <div className="ownerNeoFlavor">
                  Evidence-based care with a focus on both acute and chronic medical support, including critical cases and multidisciplinary conditions.
                </div>

                <div className="ownerNeoId">TSH-001 • TANVI OWNERS</div>
              </div>

              <div className="ownerNeoGlitch"></div>
              <div className="ownerNeoStream"></div>
              <div className="ownerNeoStream"></div>
              <div className="ownerNeoStream"></div>
              <div className="ownerNeoStream"></div>
            </div>

            <div className="ownerNeoCard">
              <div className="ownerNeoBorder"></div>

              <div className="ownerNeoRarity">
                <span className="ownerNeoGem"></span>
                <span className="ownerNeoGem"></span>
                <span className="ownerNeoGem"></span>
              </div>

              <div className="ownerNeoType">Founder</div>

              <div className="ownerNeoFrame">
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>
                <div className="ownerNeoParticle"></div>

                <img
                  src={`${process.env.PUBLIC_URL}/Images/doctor-mounika.jpeg`}
                  alt="Dr. Mounika"
                  className="ownerNeoImg"
                />

                <div className="ownerNeoFrameDark"></div>
                <div className="ownerNeoShine"></div>
                <div className="ownerNeoScanlines"></div>
                <div className="ownerNeoHolo"></div>
              </div>

              <div className="ownerNeoBody">
                <div className="ownerNeoName">Dr. Mounika Uddavolu</div>

                <div className="ownerNeoStats">
                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">🩺</div>
                    <div className="ownerNeoStatValue">MD</div>
                    <div className="ownerNeoStatLabel">Medicine</div>
                  </div>

                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">🏥</div>
                    <div className="ownerNeoStatValue">6+</div>
                    <div className="ownerNeoStatLabel">Years</div>
                  </div>

                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">💉</div>
                    <div className="ownerNeoStatValue">AIG</div>
                    <div className="ownerNeoStatLabel">FAIG</div>
                  </div>

                  <div className="ownerNeoStat">
                    <div className="ownerNeoStatIcon">✅</div>
                    <div className="ownerNeoStatValue">Care</div>
                    <div className="ownerNeoStatLabel">Trusted</div>
                  </div>
                </div>

                <div className="ownerNeoAbility">
                  <div className="ownerNeoAbilityHeader">
                    <div className="ownerNeoAbilityIcon">💠</div>
                    <div className="ownerNeoAbilityName">Clinical Profile</div>
                    <div className="ownerNeoAbilityCost">Senior</div>
                  </div>

                  <div className="ownerNeoAbilityDesc">
                    <p><span>Qualification:</span> MBBS, MD (General Medicine)</p>
                    <p><span>Fellowships:</span> Primary Care Rheumatology, CCEBDM, FAIG</p>
                    <p><span>Expertise:</span> Diabetes, Hypertension, Infectious Diseases, Lifestyle Disorders</p>
                    <p><span>Position:</span> Co-Founder, Tanvi Skin & Health Clinic</p>
                  </div>
                </div>

                <div className="ownerNeoFlavor">
                  Compassionate, structured care with modern clinical protocols and long-term support across complex internal medicine conditions.
                </div>

                <div className="ownerNeoId">TSH-002 • TANVI OWNERS</div>
              </div>

              <div className="ownerNeoGlitch"></div>
              <div className="ownerNeoStream"></div>
              <div className="ownerNeoStream"></div>
              <div className="ownerNeoStream"></div>
              <div className="ownerNeoStream"></div>
            </div>
          </div>
        </div>
      </section>


      <section className="derma-rotation-section">
        <div className="derma-rotation-left">
          <div className="derma-wrapper">
            <div className="derma-inner" style={{ "--quantity": 8 }}>
              {[
                "treatment1.jpg",
                "treatment2.jpg",
                "treatment3.jpg",
                "treatment4.jpg",
                "treatment5.jpg",
                "treatment6.jpg",
                "treatment7.jpg",
                "treatment8.jpg",
              ].map((img, index) => (
                <div
                  className="derma-rot-card"
                  key={index}
                  style={{
                    "--index": index,
                    "--color-card": "168, 85, 247",
                  }}
                >
                  <img className="derma-rot-img" src={`/Images/services/${img}`} alt={`treatment-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="derma-rotation-right">
          <h2 className="derma-rotation-title">Our Dermatology Treatments</h2>
          <p className="derma-rotation-desc">
            Personalized skin and hair care backed by clinical expertise. Explore our advanced treatments designed to give you healthy,
            radiant, and confident skin.
          </p>

          <div className="derma-treatment-grid">
            <div className="derma-treatment-col">
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Acne & Scar Treatment</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Pigmentation Correction</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Chemical Peel Therapy</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Laser Skin Resurfacing</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Anti-Aging Solutions</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Hydra Facial Treatments</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Dark Circle Reduction</div>
            </div>

            <div className="derma-treatment-col">
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Hair Fall Treatment</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Dandruff & Scalp Care</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Allergy & Rash Care</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Skin Brightening</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Warts & Mole Removal</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Stretch Mark Reduction</div>
              <div className="derma-treatment-item"><span className="derma-tick">✓</span> Skin Infection Treatment</div>
            </div>
          </div>

          <button className="derma-rotation-btn">Book Appointment</button>
        </div>
      </section>





      <section className="finalHighlightSection">
        <div className="finalHighlightInner">
          <div className="finalHighlightTop">
            <h2 className="finalHighlightTitle">Your Skin Deserves Expert Care</h2>
            <p className="finalHighlightSub">
              Clear diagnosis, safe procedures, and honest guidance, designed for results that look natural and last long.
            </p>
          </div>

          <div className="finalHighlightGrid">
            <div className="finalHighlightCard">
              <div className="finalHighlightIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 12.2l4.2 4.1L19.5 6.8"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="finalHighlightCardTitle">Personalized Diagnosis</h3>
              <p className="finalHighlightCardText">
                We understand your skin and hair concern clearly before starting any procedure.
              </p>
            </div>

            <div className="finalHighlightCard">
              <div className="finalHighlightIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2v20M2 12h20"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="finalHighlightCardTitle">Advanced Treatments</h3>
              <p className="finalHighlightCardText">
                Modern solutions for acne scars, pigmentation, hair fall, and skin rejuvenation.
              </p>
            </div>

            <div className="finalHighlightCard">
              <div className="finalHighlightIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
                    stroke="white"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 12h8"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="finalHighlightCardTitle">Safe Clinical Care</h3>
              <p className="finalHighlightCardText">
                Hygiene, verified methods, and skin-safe products are always followed.
              </p>
            </div>
          </div>

          <div className="finalHighlightBigCard">
            <div className="finalHighlightBigText">
              <h3 className="finalHighlightBigTitle">Not sure which treatment suits you?</h3>
              <p className="finalHighlightBigDesc">
                Share your concern and get a clear plan with safe options and honest guidance from our doctors at Tanvi Skin & Health Clinic.
              </p>
            </div>

            <div className="finalHighlightBigButtons">
              <button className="finalHighlightBtn">Book Consultation</button>
              <button className="finalHighlightBtn outline">View Services</button>
            </div>
          </div>
        </div>
      </section>



      <section className="home-part-grid">
        <div className="home-part-inner">
          <div className="home-part-card">
            <img
              src={`${process.env.PUBLIC_URL}/Images/part-acne-care.jpg`}
              alt="Acne Care"
              className="home-part-img"
            />
          </div>

          <div className="home-part-text">
            <h3 className="home-part-title">Acne & Scar Care</h3>
            <button className="home-part-btn">Book Consultation →</button>
          </div>

          <div className="home-part-card">
            <img
              src={`${process.env.PUBLIC_URL}/Images/part-pigmentation.jpg`}
              alt="Pigmentation"
              className="home-part-img"
            />
          </div>

          <div className="home-part-text">
            <h3 className="home-part-title">Pigmentation Treatment</h3>
            <button className="home-part-btn">View Treatment →</button>
          </div>

          <div className="home-part-text">
            <h3 className="home-part-title">Hair Fall Solutions</h3>
            <button className="home-part-btn">Get Hair Plan →</button>
          </div>

          <div className="home-part-card">
            <img
              src={`${process.env.PUBLIC_URL}/Images/part-hair-care.jpg`}
              alt="Hair Care"
              className="home-part-img"
            />
          </div>

          <div className="home-part-text">
            <h3 className="home-part-title">Laser & Aesthetic Care</h3>
            <button className="home-part-btn">Explore Services →</button>
          </div>

          <div className="home-part-card">
            <img
              src={`${process.env.PUBLIC_URL}/Images/part-laser-care.jpg`}
              alt="Laser Care"
              className="home-part-img"
            />
          </div>
        </div>
      </section>





      <section className="careSplit">
        <div className="careSplitInner">
          <div className="careBigCard">
            <div className="careBigTop">
              <div className="careBigBadge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s-7-4.65-9.2-9.2C.8 8.2 2.4 5.5 5.2 4.7 7 4.2 9.1 4.8 10.4 6.3L12 8l1.6-1.7c1.3-1.5 3.4-2.1 5.2-1.6 2.8.8 4.4 3.5 2.4 7.1C19 16.35 12 21 12 21Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="careBigTitle">Your Skin Journey Starts With Trust</h2>

              <p className="careBigDesc">
                We focus on clean diagnosis, safe procedures, and results that feel
                natural. Every treatment is planned with clarity, comfort, and long
                term care.
              </p>
            </div>

            <div className="careBigHighlights">
              <div className="bigHighlight">
                <p className="bigHighlightNum">01</p>
                <p className="bigHighlightText">
                  Personal consultation and clear skin plan
                </p>
              </div>
              <div className="bigHighlight">
                <p className="bigHighlightNum">02</p>
                <p className="bigHighlightText">Skin, hair, and aesthetic treatments</p>
              </div>
              <div className="bigHighlight">
                <p className="bigHighlightNum">03</p>
                <p className="bigHighlightText">Follow ups and progress tracking</p>
              </div>
            </div>

            <div className="careBigActions">
              <button className="careBtn">Book Consultation</button>
              <button className="careBtn ghost">Explore Services</button>
            </div>
          </div>

          <div className="careSmallGrid">
            <div className="careSmallCard">
              <div className="smallIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 12h10M12 7v10"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <h3 className="smallTitle">Acne & Scars</h3>
              <p className="smallDesc">
                Gentle + advanced care for acne, marks, and textured skin. <br />
                Helps reduce breakouts, redness, and visible scarring. <br />
                Designed for smooth, clear, and healthy looking skin.
              </p>
            </div>

            <div className="careSmallCard">
              <div className="smallIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2v20M2 12h20"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 7.5l9 9M16.5 7.5l-9 9"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="smallTitle">Pigmentation</h3>
              <p className="smallDesc">
                Treatment plans for dark spots, melasma, and uneven tone. <br />
                Targets dullness and patchy pigmentation safely. <br />
                Helps you achieve brighter and more even skin tone.
              </p>
            </div>

            <div className="careSmallCard">
              <div className="smallIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3c4.4 0 8 3.6 8 8 0 5-4.3 9.5-8 10-3.7-.5-8-5-8-10 0-4.4 3.6-8 8-8Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.5 12c.6 1 1.6 1.6 2.5 1.6s1.9-.6 2.5-1.6"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="smallTitle">Hair Fall Care</h3>
              <p className="smallDesc">
                Scalp analysis, growth plans, and long term hair support. <br />
                Improves scalp health and reduces ongoing hair fall. <br />
                Builds stronger growth with consistent care routines.
              </p>
            </div>

            <div className="careSmallCard">
              <div className="smallIcon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 20h16M6 20V8l6-4 6 4v12"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14h4"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="smallTitle">Aesthetic Care</h3>
              <p className="smallDesc">
                Modern procedures for glow, texture, and refined confidence. <br />
                Enhances skin freshness and overall appearance gently. <br />
                Ideal for natural results with safe aesthetic care.
              </p>
            </div>
          </div>
        </div>
      </section>






      <section className="three-clock-section">
        <div className="three-clock-grid">
          <div className="three-clock-card">
            <img
              src={`${process.env.PUBLIC_URL}/Images/skin-treatments-banner.jpg`}
              alt="Skin Treatments"
              className="three-clock-img"
            />
            <div className="three-clock-overlay" />
            <div className="three-clock-content">
              <h3 className="three-clock-title">Skin Treatments</h3>
              <p className="three-clock-desc">
                Advanced care for acne, pigmentation, allergies, and long term skin
                health with safe clinical guidance.
              </p>
              <a href="/treatments" className="three-clock-btn">
                View Treatments →
              </a>
            </div>
          </div>

          <div className="three-clock-card three-clock-center">
            <img
              src={`${process.env.PUBLIC_URL}/Images/clinic-aesthetic-banner.jpg`}
              alt="Clinic Aesthetic"
              className="three-clock-img"
            />
            <div className="three-clock-overlay" />
          </div>

          <div className="three-clock-card">
            <img
              src={`${process.env.PUBLIC_URL}/Images/hair-scalp-care-banner.jpg`}
              alt="Hair & Scalp Care"
              className="three-clock-img"
            />
            <div className="three-clock-overlay" />
            <div className="three-clock-content">
              <h3 className="three-clock-title">Hair & Scalp Care</h3>
              <p className="three-clock-desc">
                Hair fall evaluation, scalp treatments, and growth plans designed to
                match your condition and lifestyle.
              </p>
              <a href="/treatments" className="three-clock-btn">
                Explore Hair Care →
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="clinicShowcase">
        <div className="clinicShowcaseInner">
          <div className="clinicShowcaseLeft">
            <div className="clinicShowcaseBadge">Tanvi Skin & Health Clinic</div>

            <h2 className="clinicShowcaseTitle">
              Modern Care For
              <br />
              Skin, Hair & Wellness
            </h2>

            <p className="clinicShowcaseDesc">
              Get clear diagnosis, safe treatment plans, and honest guidance from a team that
              focuses on results that feel natural. From everyday skin concerns to advanced
              aesthetic care, everything is designed around you.
            </p>

            <div className="clinicShowcaseList">
              <div className="clinicPoint">
                <span className="clinicDot"></span>
                <p>Personalized consultation and treatment roadmap</p>
              </div>
              <div className="clinicPoint">
                <span className="clinicDot"></span>
                <p>Advanced procedures with skin safe methods</p>
              </div>
              <div className="clinicPoint">
                <span className="clinicDot"></span>
                <p>Follow ups and progress tracking for long term results</p>
              </div>
              <div className="clinicPoint">
                <span className="clinicDot"></span>
                <p>Clean clinic setup with professional care standards</p>
              </div>
            </div>

            <div className="clinicShowcaseActions">
              <button className="clinicShowBtn">Book Appointment</button>
              <button className="clinicShowBtn ghost">Call Now</button>
            </div>
          </div>

          <div className="clinicShowcaseRight">
            <div className="clinicMosaic">
              <div className="clinicMosaicCard big">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/dermatology-clinic-banner.jpg`}
                  alt="Clinic"
                />
                <div className="clinicMosaicOverlay"></div>
                <div className="clinicMosaicText">
                  <p className="mosaicTitle">Trusted Clinic Care</p>
                  <p className="mosaicSub">Comfortable consultations and clear guidance</p>
                </div>
              </div>

              <div className="clinicMosaicCard small">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/laser-skin-treatment-aesthetic-clinic.jpg`}
                  alt="Aesthetic"
                />
                <div className="clinicMosaicOverlay"></div>
                <div className="clinicMosaicMini">
                  <p className="miniTitle">Aesthetic Care</p>
                </div>
              </div>

              <div className="clinicMosaicCard small">
                <img
                  src={`${process.env.PUBLIC_URL}/Images/hair-loss-treatment-scalp-care-clinic.jpg`}
                  alt="Hair"
                />
                <div className="clinicMosaicOverlay"></div>
                <div className="clinicMosaicMini">
                  <p className="miniTitle">Hair & Scalp</p>
                </div>
              </div>

              <div className="clinicMosaicStats">
                <div className="clinicStat">
                  <p className="clinicStatNum">5k+</p>
                  <p className="clinicStatLabel">Patients</p>
                </div>
                <div className="clinicStat">
                  <p className="clinicStatNum">10+</p>
                  <p className="clinicStatLabel">Treatments</p>
                </div>
                <div className="clinicStat">
                  <p className="clinicStatNum">100%</p>
                  <p className="clinicStatLabel">Care Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>














      <section className="reviewSection">
        <div className="reviewBgGlow"></div>

        <div className="reviewInner">
          <div className="reviewTop">
            <h2 className="reviewTitle">Patient Reviews</h2>
            <p className="reviewSubtitle">
              Real experiences from people who visited Tanvi Skin & Health Clinic. Honest guidance, safe care, and results that
              feel natural.
            </p>
          </div>

          <div className="reviewGrid">
            <div className="reviewCard">
              <div className="reviewHeader">
                <div className="reviewAvatar">
                  <span>A</span>
                </div>

                <div className="reviewMeta">
                  <p className="reviewName">Ananya</p>
                  <p className="reviewTag">Acne Treatment</p>
                </div>

                <div className="reviewStars">
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                </div>
              </div>

              <p className="reviewText">
                My acne reduced within weeks and the routine was super easy to follow. The consultation felt personal and the
                guidance was very clear. I finally feel confident in my skin.
              </p>

              <div className="reviewFooter">
                <p className="reviewTime">2 weeks ago</p>
                <div className="reviewQuote">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.2 11.6H6.6C6.8 8.7 8.2 7 11 6.2V4C6.6 5.2 4 8.4 4 13.1V20h5.2V11.6Zm10.8 0h-2.6c.2-2.9 1.6-4.6 4.4-5.4V4c-4.4 1.2-7 4.4-7 9.1V20H20V11.6Z"
                      fill="rgba(255,255,255,0.7)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="reviewCard">
              <div className="reviewHeader">
                <div className="reviewAvatar">
                  <span>R</span>
                </div>

                <div className="reviewMeta">
                  <p className="reviewName">Rahul</p>
                  <p className="reviewTag">Hair Fall Care</p>
                </div>

                <div className="reviewStars">
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                </div>
              </div>

              <p className="reviewText">
                I tried many things before, but this was the first time I saw actual improvement. The plan was simple, practical,
                and easy to follow. No over promises, just real care.
              </p>

              <div className="reviewFooter">
                <p className="reviewTime">1 month ago</p>
                <div className="reviewQuote">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.2 11.6H6.6C6.8 8.7 8.2 7 11 6.2V4C6.6 5.2 4 8.4 4 13.1V20h5.2V11.6Zm10.8 0h-2.6c.2-2.9 1.6-4.6 4.4-5.4V4c-4.4 1.2-7 4.4-7 9.1V20H20V11.6Z"
                      fill="rgba(255,255,255,0.7)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="reviewCard">
              <div className="reviewHeader">
                <div className="reviewAvatar">
                  <span>S</span>
                </div>

                <div className="reviewMeta">
                  <p className="reviewName">Sneha</p>
                  <p className="reviewTag">Pigmentation Care</p>
                </div>

                <div className="reviewStars">
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                  <span className="reviewStar"></span>
                </div>
              </div>

              <p className="reviewText">
                The treatment was smooth and safe. My skin tone improved and the follow ups were consistent. Everything was
                explained clearly, and the results feel natural.
              </p>

              <div className="reviewFooter">
                <p className="reviewTime">3 months ago</p>
                <div className="reviewQuote">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.2 11.6H6.6C6.8 8.7 8.2 7 11 6.2V4C6.6 5.2 4 8.4 4 13.1V20h5.2V11.6Zm10.8 0h-2.6c.2-2.9 1.6-4.6 4.4-5.4V4c-4.4 1.2-7 4.4-7 9.1V20H20V11.6Z"
                      fill="rgba(255,255,255,0.7)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="reviewCTA">
            <div className="reviewCTAText">
              <h3 className="reviewCTATitle">Want to share your feedback?</h3>
              <p className="reviewCTADesc">
                Your review helps more people feel confident about starting their treatment journey.
              </p>
            </div>

            <div className="reviewCTAButtons">
              <button className="reviewBtn">Write a Review</button>
              <button className="reviewBtn ghost">See More</button>
            </div>
          </div>
        </div>
      </section>



      <section className="clinicInfoSection">
        <div className="clinicInfoInner">
          <div className="clinicInfoLeft">
            <h2 className="clinicInfoTitle">Care That Feels Calm, Clean, and Personal</h2>
            <p className="clinicInfoDesc">
              Tanvi Skin & Health Clinic is built for comfort and clarity. We focus on simple guidance, safe treatments,
              and real solutions for skin, hair, and internal medicine concerns.
            </p>

            <div className="clinicInfoList">
              <div className="clinicInfoItem">
                <div className="clinicInfoDot"></div>
                <div>
                  <p className="clinicInfoItemTitle">Clear Consultation</p>
                  <p className="clinicInfoItemText">
                    We explain your condition in a simple way and guide you step by step.
                  </p>
                </div>
              </div>

              <div className="clinicInfoItem">
                <div className="clinicInfoDot"></div>
                <div>
                  <p className="clinicInfoItemTitle">Safe Procedures</p>
                  <p className="clinicInfoItemText">
                    Every treatment is done with hygiene, caution, and trusted products.
                  </p>
                </div>
              </div>

              <div className="clinicInfoItem">
                <div className="clinicInfoDot"></div>
                <div>
                  <p className="clinicInfoItemTitle">Long Term Support</p>
                  <p className="clinicInfoItemText">
                    Follow ups and progress checks help you stay confident about your results.
                  </p>
                </div>
              </div>
            </div>

            <div className="clinicInfoActions">
              <button className="clinicInfoBtn">Book Appointment</button>
              <button className="clinicInfoBtn ghost">Contact Clinic</button>
            </div>
          </div>

          <div className="clinicInfoRight">
            <div className="clinicInfoCard">
              <p className="clinicInfoCardTag">Trusted Clinic</p>
              <p className="clinicInfoCardTitle">Modern Dermatology + General Medicine</p>
              <p className="clinicInfoCardText">
                One place for complete care, skin, hair, diabetes, hypertension, infections, and wellness guidance.
              </p>

              <div className="clinicInfoStats">
                <div className="clinicStat">
                  <p className="clinicStatNum">10+</p>
                  <p className="clinicStatLabel">Treatments</p>
                </div>
                <div className="clinicStat">
                  <p className="clinicStatNum">5k+</p>
                  <p className="clinicStatLabel">Patients</p>
                </div>
                <div className="clinicStat">
                  <p className="clinicStatNum">100%</p>
                  <p className="clinicStatLabel">Care Focus</p>
                </div>
              </div>
            </div>

            <div className="clinicInfoMiniGrid">
              <div className="miniInfoCard">
                <p className="miniInfoTitle">Acne & Scars</p>
                <p className="miniInfoText">Smooth skin plans with safe scar reduction.</p>
              </div>
              <div className="miniInfoCard">
                <p className="miniInfoTitle">Pigmentation</p>
                <p className="miniInfoText">Brighter tone and patch care, done gently.</p>
              </div>
              <div className="miniInfoCard">
                <p className="miniInfoTitle">Hair Fall</p>
                <p className="miniInfoText">Scalp analysis + growth support programs.</p>
              </div>
              <div className="miniInfoCard">
                <p className="miniInfoTitle">General Health</p>
                <p className="miniInfoText">Diabetes, BP, fever, and lifestyle care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <Footer />




    </>
  );
}

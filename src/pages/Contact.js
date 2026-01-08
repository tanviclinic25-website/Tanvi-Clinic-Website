import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const banner = `${process.env.PUBLIC_URL}/Images/dermatology-clinic-banner.jpg`;
  const doctor1 = `${process.env.PUBLIC_URL}/Images/doctor-hareen-kumar.jpeg`;
  const doctor2 = `${process.env.PUBLIC_URL}/Images/doctor-mounika.jpeg`;
  const clinic1 = `${process.env.PUBLIC_URL}/Images/clinic-aesthetic-banner.jpg`;
  const clinic2 = `${process.env.PUBLIC_URL}/Images/skin-treatments-banner.jpg`;
  const clinic3 = `${process.env.PUBLIC_URL}/Images/hair-scalp-care-banner.jpg`;

  const mapLink =
    "https://www.google.com/maps/place/Dr+Hareen+Kumar+MD/@18.3067786,83.8932178,17z/data=!4m17!1m10!3m9!1s0x3a3c1590b7bee143:0x97d79a045a297045!2sDr+Hareen+Kumar+MD!8m2!3d18.3068395!4d83.8932299!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11qbp_4zl7!3m5!1s0x3a3c1590b7bee143:0x97d79a045a297045!8m2!3d18.3068395!4d83.8932299!16s%2Fg%2F11qbp_4zl7?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D";

  return (
    <>
      <Navbar />

      <section className="contactHero" style={{ backgroundImage: `url(${banner})` }}>
        <div className="contactHeroOverlay">
          <div className="contactHeroInner">
            <h1 className="contactHeroTitle">Contact Tanvi Skin & Health Clinic</h1>
            <p className="contactHeroDesc">
              We are here to help you with skin, hair, cosmetic and general medicine care. Reach out for consultations, appointments,
              and treatment guidance.
            </p>
            <div className="contactHeroActions">
              <a className="contactHeroBtn primary" href="tel:9390582488">Call Now</a>
              <a className="contactHeroBtn secondary" href={mapLink} target="_blank" rel="noreferrer">Get Directions</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection black">
        <div className="contactContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Quick Contact</h2>
            <p className="sectionSub">
              For appointments, treatment queries, and follow-ups, use the details below.
            </p>
          </div>

          <div className="infoGrid">
            <div className="infoCard">
              <h3 className="infoTitle">Phone</h3>
              <p className="infoText">
                <a href="tel:9390582488">9390582488</a>
                <span className="dotSep">•</span>
                <a href="tel:7032942903">7032942903</a>
              </p>
            </div>

            <div className="infoCard">
              <h3 className="infoTitle">Clinic Address</h3>
              <p className="infoText">
                Ambedkar Junction Near Seetharama Medical Centre
              </p>
            </div>

            <div className="infoCard">
              <h3 className="infoTitle">Directions</h3>
              <p className="infoText">
                <a href={mapLink} target="_blank" rel="noreferrer">Open in Google Maps</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection white">
        <div className="contactContainer">
          <div className="splitRow">
            <div className="splitLeft">
              <h2 className="splitTitle">Book an Appointment</h2>
              <p className="splitText">
                Share your details and our clinic team will contact you for appointment scheduling and consultation support.
              </p>

              <form className="contactForm">
                <div className="formRow">
                  <div className="field">
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="formRow">
                  <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>
                  <div className="field">
                    <label>Service</label>
                    <select>
                      <option>Dermatology Consultation</option>
                      <option>Cosmetic / Aesthetic Treatment</option>
                      <option>Hair & Scalp Consultation</option>
                      <option>General Medicine Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="field full">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Tell us about your concern" />
                </div>

                <button type="button" className="submitBtn">Submit Request</button>
              </form>
            </div>

            <div className="splitRight">
              <div className="imageStack">
                <div className="stackCard">
                  <img src={clinic1} alt="clinic" />
                </div>
                <div className="stackCard">
                  <img src={clinic2} alt="treatments" />
                </div>
                <div className="stackCard">
                  <img src={clinic3} alt="hair care" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection black">
        <div className="contactContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Meet Our Doctors</h2>
            <p className="sectionSub">
              Experienced clinicians offering skin, hair, cosmetic and internal medicine care.
            </p>
          </div>

          <div className="doctorGrid">
            <div className="doctorCard">
              <div className="doctorImage">
                <img src={doctor1} alt="Dr Hareen Kumar" />
              </div>
              <div className="doctorBody">
                <h3 className="doctorName">Dr. Hareen Kumar Regulavalasa</h3>
                <p className="doctorRole">Co-Founder, Tanvi Skin & Health Clinic</p>
                <p className="doctorMeta">Senior Consultant Physician, General Medicine Specialist</p>

                <div className="doctorList">
                  <div className="li"><span className="tick">✓</span> MBBS (Rangaraya Medical College, Kakinada)</div>
                  <div className="li"><span className="tick">✓</span> MD General Medicine (JJM Medical College, Davanagere)</div>
                  <div className="li"><span className="tick">✓</span> FAIG, CCEBDM, Rheumatology Fellowship</div>
                </div>
              </div>
            </div>

            <div className="doctorCard">
              <div className="doctorImage">
                <img src={doctor2} alt="Dr Mounika Uddavolu" />
              </div>
              <div className="doctorBody">
                <h3 className="doctorName">Dr. Mounika Uddavolu</h3>
                <p className="doctorRole">Co-Founder, Tanvi Skin & Health Clinic</p>
                <p className="doctorMeta">MD DVL, Consultant Dermatologist & Cosmetologist</p>

                <div className="doctorList">
                  <div className="li"><span className="tick">✓</span> MD DVL (Dermatology, Venereology & Leprosy)</div>
                  <div className="li"><span className="tick">✓</span> Acne, pigmentation, laser and aesthetic procedures</div>
                  <div className="li"><span className="tick">✓</span> Hair treatments, scalp analysis and regrowth plans</div>
                </div>

                <div className="regNo">
                  Regd. No.: <span>106934</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection white">
        <div className="contactContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle darkText">Services We Help With</h2>
            <p className="sectionSub darkSub">
              A quick overview of the care available at Tanvi Skin & Health Clinic.
            </p>
          </div>

          <div className="servicePills">
            {[
              "Acne & Scar Treatment",
              "Pigmentation & Melasma Care",
              "Allergy / Rash Treatment",
              "Anti-Aging & Rejuvenation",
              "Laser Treatment & Aesthetic Procedures",
              "Hair Fall Treatment",
              "Scalp Analysis",
              "Hair Regrowth Plans",
              "Dandruff & Scalp Care",
              "Fever, Infections, Viral Illness",
              "Diabetes Management",
              "Hypertension Care",
              "Rheumatology Issues",
              "Lifestyle Disorders",
            ].map((t, i) => (
              <div className="pill" key={i}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection black">
        <div className="contactContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Clinic Highlights</h2>
            <p className="sectionSub">
              What makes the experience comfortable, safe, and premium.
            </p>
          </div>

          <div className="highlightGrid">
            <div className="highlightCard">
              <h3>Personalized Care</h3>
              <p>Every plan is created based on your skin type, lifestyle, and medical history.</p>
            </div>
            <div className="highlightCard">
              <h3>Modern Procedures</h3>
              <p>Advanced dermatology and aesthetic care with safe clinical methods.</p>
            </div>
            <div className="highlightCard">
              <h3>Follow-up Support</h3>
              <p>We guide you through post-treatment care and long-term maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection white">
        <div className="contactContainer">
          <div className="dualCards">
            <div className="simpleCard">
              <h2 className="simpleTitle">Visit the Clinic</h2>
              <p className="simpleText">
                Ambedkar Junction Near Seetharama Medical Centre
              </p>
              <a className="simpleBtn" href={mapLink} target="_blank" rel="noreferrer">
                View Location
              </a>
            </div>

            <div className="simpleCard">
              <h2 className="simpleTitle">Call for Consultation</h2>
              <p className="simpleText">
                Speak with our team and book your appointment with ease.
              </p>
              <a className="simpleBtn" href="tel:9390582488">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection black">
        <div className="contactContainer">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Common Questions</h2>
            <p className="sectionSub">
              Quick clarity before you visit.
            </p>
          </div>

          <div className="faqGrid">
            <div className="faqCard">
              <h3>Do you treat both skin and hair issues?</h3>
              <p>Yes. We provide full dermatology care including scalp and hair treatments.</p>
            </div>
            <div className="faqCard">
              <h3>Do you offer cosmetic procedures?</h3>
              <p>Yes. Cosmetic and aesthetic dermatology is provided with safe modern practices.</p>
            </div>
            <div className="faqCard">
              <h3>Can I consult for fever and diabetes?</h3>
              <p>Yes. General medicine consultations are provided by Dr. Hareen Kumar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contactSection white">
        <div className="contactContainer">
          <div className="finalCTA">
            <h2 className="finalTitle">Ready to Get Started?</h2>
            <p className="finalSub">
              Book your appointment with Tanvi Skin & Health Clinic. Our doctors are here to help you feel confident, healthy, and cared for.
            </p>
            <div className="finalActions">
              <a className="finalBtn primary" href="tel:9390582488">Call Now</a>
              <a className="finalBtn secondary" href={mapLink} target="_blank" rel="noreferrer">Directions</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

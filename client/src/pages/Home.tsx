export default function Home() {
  return (
    <>
      <style>{`
/* ============================================
   RESET ET BASE - NE PAS MODIFIER
   ============================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', Arial, sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: #2d2d2d;
    background: #FFFFFF;
}

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap');

/* ============================================
   CORRECTION #1 : ESPACEMENTS RÉDUITS
   ============================================ */

/* SECTIONS : Padding réduit drastiquement */
section {
    padding: 50px 5% !important;
    margin-bottom: 0 !important;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

/* PARAGRAPHES : Espacement minimal */
p {
    margin-bottom: 15px !important;
    line-height: 1.65 !important;
}

/* TITRES : Espacement contrôlé */
h1 {
    font-family: 'Playfair Display', serif;
    font-size: 34px;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 20px !important;
    margin-top: 0 !important;
    line-height: 1.3;
}

h2 {
    font-family: 'Playfair Display', serif;
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 18px !important;
    margin-top: 30px !important;
}

h3 {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    color: #2d2d2d;
    margin-bottom: 12px !important;
    margin-top: 20px !important;
}

/* LISTES : Espacement réduit */
ul, ol {
    margin-bottom: 15px !important;
    padding-left: 25px !important;
}

li {
    margin-bottom: 8px !important;
    line-height: 1.6;
}

/* ============================================
   CORRECTION #2 : IMAGES OPTIMISÉES
   ============================================ */

/* TOUTES LES IMAGES : Style de base */
img {
    display: block;
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    margin: 25px auto;
}

/* IMAGE HERO (première image) : TAILLE LIMITÉE */
.hero-section img {
    max-width: 550px !important;
    width: 100%;
    margin: 20px auto;
}

/* PHOTOS DE BIJOUX : GRANDES ET VALORISÉES */
.product-image,
.bijoux-image {
    max-width: 700px !important;
    width: 100% !important;
    border: 6px solid #F8F6F0 !important;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.25) !important;
    margin: 35px auto !important;
}

/* ============================================
   CORRECTION #3 : COULEURS IMPACTANTES
   ============================================ */

/* Alterner fonds sections */
section:nth-child(odd) {
    background: #FFFFFF;
}

section:nth-child(even) {
    background: linear-gradient(180deg, #FAF9F6 0%, #FFFFFF 100%);
}

/* SECTION HERO : Fond or léger */
.hero-section {
    background: linear-gradient(135deg, #FFF9E6 0%, #FFFFFF 70%) !important;
    border-bottom: 5px solid #D4AF37 !important;
    padding: 60px 5% !important;
}

/* ============================================
   CORRECTION #4 : SECTION MARGE ULTRA-VISIBLE
   ============================================ */

/* SECTION CALCUL MARGE : Bordure or épaisse + fond */
.marge-section {
    background: linear-gradient(135deg, #FFF9E6 0%, #FFFAED 100%) !important;
    border: 5px solid #D4AF37 !important;
    border-radius: 20px !important;
    padding: 45px 40px !important;
    box-shadow: 0 20px 60px rgba(212, 175, 55, 0.3) !important;
    margin: 40px auto !important;
    max-width: 900px !important;
}

/* Chiffres en OR et GROS */
.prix,
.marge,
.benefice {
    color: #D4AF37 !important;
    font-weight: 800 !important;
    font-size: 28px !important;
    font-family: 'Playfair Display', serif !important;
}

/* ============================================
   CORRECTION #5 : BOUTONS CTA ÉNORMES
   ============================================ */

/* TOUS LES BOUTONS : Gros et impactants */
.cta-button {
    display: block !important;
    width: 90% !important;
    max-width: 500px !important;
    margin: 30px auto !important;
    padding: 25px 40px !important;
    
    background: linear-gradient(135deg, #D4AF37 0%, #C4A137 100%) !important;
    color: #FFFFFF !important;
    
    font-family: 'Open Sans', sans-serif !important;
    font-size: 22px !important;
    font-weight: 700 !important;
    text-align: center !important;
    text-decoration: none !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    
    border: none !important;
    border-radius: 50px !important;
    box-shadow: 0 12px 40px rgba(212, 175, 55, 0.5) !important;
    
    cursor: pointer !important;
    transition: all 0.3s ease !important;
}

.cta-button:hover {
    background: linear-gradient(135deg, #C4A137 0%, #B49127 100%) !important;
    transform: translateY(-4px) scale(1.05) !important;
    box-shadow: 0 18px 60px rgba(212, 175, 55, 0.7) !important;
}

/* ============================================
   CORRECTION #6 : TÉMOIGNAGES ENCADRÉS
   ============================================ */

.testimonial {
    background: #FFFFFF !important;
    border-left: 6px solid #D4AF37 !important;
    padding: 30px 25px !important;
    margin: 25px auto !important;
    max-width: 800px !important;
    border-radius: 10px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12) !important;
}

.testimonial p {
    font-style: italic !important;
    color: #333 !important;
    font-size: 17px !important;
    margin-bottom: 12px !important;
}

.testimonial-author {
    font-weight: 600 !important;
    color: #D4AF37 !important;
    font-size: 15px !important;
    margin-top: 10px !important;
}

/* ============================================
   CORRECTION #7 : SECTION FINALE DORÉE
   ============================================ */

/* DERNIÈRE SECTION : Pleine largeur or */
.final-cta {
    background: linear-gradient(135deg, #D4AF37 0%, #C4A137 100%) !important;
    color: #FFFFFF !important;
    text-align: center !important;
    padding: 70px 5% !important;
    margin: 0 !important;
    max-width: 100% !important;
    border-radius: 0 !important;
}

.final-cta h2 {
    color: #FFFFFF !important;
    font-size: 38px !important;
    margin-bottom: 18px !important;
}

.final-cta p {
    color: #FFFFFF !important;
    font-size: 19px !important;
}

/* Bouton dans section finale : BLANC */
.final-cta .cta-button {
    background: #FFFFFF !important;
    color: #D4AF37 !important;
    font-size: 24px !important;
    padding: 28px 50px !important;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3) !important;
}

.final-cta .cta-button:hover {
    background: #F8F6F0 !important;
    transform: translateY(-6px) scale(1.08) !important;
}

/* ============================================
   CORRECTION #8 : FOOTER CLAIR
   ============================================ */

footer {
    background: #2C3E50 !important;
    color: #FFFFFF !important;
    padding: 40px 5% !important;
    text-align: center !important;
    font-size: 15px !important;
}

footer p {
    color: #FFFFFF !important;
    margin-bottom: 10px !important;
}

footer a {
    color: #D4AF37 !important;
    text-decoration: none !important;
    margin: 0 12px !important;
}

footer a:hover {
    text-decoration: underline !important;
}

/* ============================================
   CORRECTION #9 : FAQ VISIBLE
   ============================================ */

.faq-item {
    background: #FFFFFF !important;
    border: 2px solid #E8E8E8 !important;
    border-radius: 10px !important;
    padding: 25px !important;
    margin-bottom: 15px !important;
    transition: all 0.3s ease !important;
}

.faq-item:hover {
    border-color: #D4AF37 !important;
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2) !important;
}

.faq-question {
    font-weight: 700 !important;
    color: #1a1a1a !important;
    font-size: 19px !important;
    margin-bottom: 10px !important;
}

.faq-answer {
    color: #555 !important;
    font-size: 17px !important;
    line-height: 1.6 !important;
}

/* ============================================
   HEADER / LOGO
   ============================================ */

header {
    background: #FFFFFF;
    padding: 5px 5%;
    text-align: center;
    border-bottom: 2px solid #F8F6F0;
}

header img {
    max-width: 150px;
    margin: 0 auto 8px auto;
    box-shadow: none;
}

header p {
    font-size: 18px;
    color: #555;
    line-height: 1.5;
    margin: 0;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* ============================================
   BADGES
   ============================================ */

.badges {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin: 25px 0;
}

.badge {
    background: #FFFFFF;
    border: 2px solid #D4AF37;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 600;
    color: #2d2d2d;
}

/* ============================================
   FORMULAIRE CONTACT
   ============================================ */

.contact-form {
    max-width: 500px;
    margin: 30px auto;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: #D4AF37;
}

.contact-form button {
    width: 100%;
    background: #D4AF37;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.contact-form button:hover {
    background: #C4A137;
    transform: translateY(-2px);
}

.contact-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #2d2d2d;
}

/* ============================================
   RESPONSIVE MOBILE
   ============================================ */

@media (max-width: 768px) {
    h1 {
        font-size: 24px !important;
        line-height: 1.3 !important;
    }
    
    h2 {
        font-size: 24px !important;
    }
    
    h3 {
        font-size: 19px !important;
    }
    
    section {
        padding: 30px 4% !important;
    }
    
    .hero-section {
        padding: 40px 4% !important;
    }
    
    .cta-button {
        font-size: 17px !important;
        padding: 18px 25px !important;
        width: 95% !important;
    }
    
    .marge-section {
        padding: 25px 15px !important;
    }
    
    .prix, .marge, .benefice {
        font-size: 22px !important;
    }
    
    header img {
        max-width: 120px;
    }
    
    header {
        padding: 4px 4% !important;
    }
    
    header p {
        font-size: 15px !important;
    }
    
    .badges {
        flex-direction: column;
        align-items: center;
    }
    
    .badge {
        font-size: 14px;
        padding: 8px 15px;
    }
    
    .testimonial {
        padding: 20px 15px !important;
    }
    
    .faq-item {
        padding: 18px !important;
    }
    
    .faq-question {
        font-size: 17px !important;
    }
    
    .faq-answer {
        font-size: 15px !important;
    }
    
    .final-cta h2 {
        font-size: 28px !important;
    }
    
    .final-cta p {
        font-size: 16px !important;
    }
    
    .contact-form {
        padding: 0 10px;
    }
    
    body {
        font-size: 16px;
    }
}
      `}</style>

      <div style={{ fontFamily: "'Open Sans', Arial, sans-serif" }}>
        {/* HEADER */}
        <header>
          <img src="/logo.png" alt="Les Bijoux Français" />
          <p>Découvrez nos créations artisanales françaises en acier inoxydable avec finition dorée durable. Chaque bijou est sélectionné pour sa qualité, son style et son prix ultra accessible</p>
        </header>

        {/* SECTION 1 : HERO */}
        <section className="hero-section">
          <h1>🎄 LOT NOËL 2025 : 350 Bijoux de Créateurs Français<br/>Marges Exceptionnelles pour Revendeurs Exigeants</h1>
          
          <p style={{ fontSize: '20px', fontWeight: 600 }}>
            Vous en avez marre des bijoux fantaisie de mauvaise qualité ?<br/>
            Découvrez des créations françaises qui se vendent seules.
          </p>

          <a href="https://buy.stripe.com/eVq7sE0bc7FO99hfq98EM02" className="cta-button">
            Je sécurise mon lot à 399€ TTC
          </a>

          <div className="badges">
            <span className="badge">✅ Créateurs Français - Les Bijoux de Mimi</span>
            <span className="badge">✅ Acier Inoxydable Doré Or Fin</span>
            <span className="badge">✅ Livraison Rapide France</span>
          </div>

          <img src="/c3afcc51-2e35-4c97-a9fe-ddfb1a66dd76.jpg" alt="Cliente satisfaite portant un collier" />
        </section>

        {/* SECTION 2 : PROBLÈME */}
        <section>
          <h2>Vous le savez mieux que personne...</h2>
          
          <p style={{ fontSize: '18px' }}>
            ❌ Les bijoux fantaisie premiers prix = qualité catastrophique, clients déçus, retours<br/>
            ❌ Les "lots surprise" = 80% de références qui ne se vendent jamais<br/>
            ❌ Les marges ridicules = vous travaillez pour rien<br/>
            ❌ Les imports longs = vous ratez la saison
          </p>

          <p style={{ fontSize: '19px', fontWeight: 600, marginTop: '25px' }}>
            Résultat ? Vous perdez du temps, de l'argent, et la confiance de vos clients.
          </p>

          <p style={{ fontSize: '20px', fontWeight: 700, color: '#D4AF37', marginTop: '20px' }}>
            Ce lot a été pensé EXACTEMENT pour résoudre ces problèmes.
          </p>
        </section>

        {/* SECTION 3 : SOLUTION */}
        <section>
          <h2>🎁 Ce que vous recevez exactement</h2>
          
          <p style={{ fontSize: '20px', fontWeight: 600 }}>
            Un lot complet de <strong>350 bijoux de créateurs français</strong>, prêt à vendre :
          </p>

          <h3>📦 59 RÉFÉRENCES DIFFÉRENTES</h3>
          <p>→ Variété maximale pour plaire à tous vos clients<br/>
          → Pas de stock mort : chaque pièce a son acheteur</p>

          <img src="/Lotbijoux3.jpg" alt="Assortiment complet du lot" className="bijoux-image" />

          <h3>🏆 CATÉGORIES BEST-SELLERS</h3>
          <ul style={{ fontSize: '18px' }}>
            <li>Médailles tendance (symboles, pompons, pampilles) : 47 pièces</li>
            <li>Boucles d'oreilles créoles & studs : 5 pièces</li>
            <li>Cordons dorés : 6 pièces</li>
            <li>Bagues anneaux : 4 pièces</li>
            <li>Bracelets & colliers : 6 pièces</li>
          </ul>

          <img src="/a84f9730-f6a4-4513-a470-9373d819609f.jpg" alt="Boucles d'oreilles créoles dorées" className="bijoux-image" />
          <img src="/118080fe-c0ed-4760-951c-f400400a133e.jpg" alt="Bracelet et boucles d'oreilles" className="bijoux-image" />

          <h3>💎 QUALITÉ CRÉATEUR FRANÇAIS</h3>
          <p>→ Marque : <strong>Les Bijoux de Mimi</strong> (Arcachon)<br/>
          → Acier inoxydable doré or fin (tenue longue durée)<br/>
          → Finitions soignées, pas de "made in china" cheap</p>

          <img src="/52ec8597-78ce-4fc5-b4c3-e558e192cba1.jpg" alt="Médaille gravée Je t'aime" className="bijoux-image" />
          <img src="/09a9b026-dcf5-4b5c-b8b0-1d9242a0a2af.jpg" alt="Bague étoile dorée" className="bijoux-image" />
        </section>

        {/* SECTION 4 : CALCUL MARGE */}
        <section className="marge-section">
          <h2 style={{ textAlign: 'center' }}>💰 VOTRE MARGE : UN EXEMPLE CONCRET</h2>
          
          <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '25px' }}>
            Vous achetez : <span className="prix">399€ TTC</span> (tout compris)
          </p>
          
          <p style={{ fontSize: '20px', textAlign: 'center' }}>
            Vous revendez au prix public conseillé : <span className="prix">4 071€</span>
          </p>
          
          <p style={{ fontSize: '24px', textAlign: 'center', marginTop: '20px' }}>
            Votre bénéfice brut : <span className="benefice">3 672€</span>
          </p>

          <p style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', color: '#D4AF37', marginTop: '25px' }}>
            Soit 90% de marge !
          </p>

          <p style={{ fontSize: '18px', marginTop: '30px', textAlign: 'center' }}>
            Prix moyen par pièce pour vous : <strong>1,17€ HT</strong><br/>
            Prix de vente public conseillé : <strong>11,94€</strong><br/>
            → Parfait pour vendre entre 5€ et 15€ selon vos emplacements et positionnement
          </p>

          <a href="https://buy.stripe.com/eVq7sE0bc7FO99hfq98EM02" className="cta-button">
            Je veux cette marge
          </a>
        </section>

        {/* SECTION 5 : TÉMOIGNAGES */}
        <section>
          <h2>🌟 Ce que disent nos revendeurs</h2>
          
          <div className="testimonial">
            <p>"J'ai écoulé 80% du stock en 2 marchés de Noël. Les clientes adorent le côté français et la qualité est incomparable avec ce que je trouve habituellement."</p>
            <p className="testimonial-author">— Sophie, vendeuse marché de Noël - Rennes</p>
          </div>



          <div className="testimonial">
            <p>"Enfin un fournisseur qui comprend nos contraintes. Lot varié, marge correcte, qualité au top."</p>
            <p className="testimonial-author">— Marc, solderie - Lyon</p>
          </div>

          <img src="/3f98404e-a9a3-4261-8c6a-7f10e93a79e6.jpg" alt="Revendeuse avec collier médaille" className="bijoux-image" />

          <div className="testimonial">
            <p>"Enfin de vrais bijoux français de qualité à prix grossiste. Ma meilleure marge de l'année !"</p>
            <p className="testimonial-author">— Julie, vide-greniers - Nantes</p>
          </div>

          <img src="/f3ff2af4-aaa6-4c02-bfb1-a25cb0d2e9f8.jpg" alt="Cliente heureuse avec collier ancre" className="bijoux-image" />

          <h3 style={{ marginTop: '40px' }}>🏢 Les Bijoux de créateurs Français by Solustoc</h3>
          <p>→ SIRET : <strong>943 702 126 00013</strong><br/>
          → Basé dans le bassin nantais<br/>
          → Spécialiste bijoux créateurs depuis 2025<br/>
          → Des centaines de revendeurs satisfaits</p>

          <h3>🇫🇷 CRÉATEURS FRANÇAIS RECONNUS</h3>
          <p>→ Les Bijoux de Mimi : création artisanale d'Arcachon<br/>
          → Standards qualité bijouterie<br/>
          → Collections vendues en boutiques à 10-15€ pièce</p>

          <img src="/739bf648-2d8c-4308-bf74-c87b044106be.jpg" alt="Collier coeur sur coussin fleuri" className="bijoux-image" />
        </section>

        {/* SECTION 6 : FAQ */}
        <section>
          <h2>❓ Vos questions, nos réponses</h2>
          
          <div className="faq-item">
            <p className="faq-question">Q : "C'est vraiment de la qualité ou c'est du toc ?"</p>
            <p className="faq-answer">R : Acier inoxydable doré or fin, même matériau que des bijoux vendus 10-15€ en boutique. Résiste à l'eau, ne noircit pas. Garantie qualité créateur français.</p>
          </div>

          <div className="faq-item">
            <p className="faq-question">Q : "350 pièces c'est trop pour moi"</p>
            <p className="faq-answer">R : C'est exactement la quantité idéale pour un marché de Noël rentable (3-4 weekends) ou pour alimenter une petite boutique pendant 2 mois. Vous ne serez pas en rupture.</p>
          </div>

          <div className="faq-item">
            <p className="faq-question">Q : "Comment je sais que ça va se vendre ?"</p>
            <p className="faq-answer">R : Ces bijoux se vendent déjà à 10-15€ en boutiques physiques et en ligne. À 5-10€ sur votre stand, c'est un prix perçu comme très attractif pour vos clientes tout en vous laissant une marge confortable.</p>
          </div>

          <div className="faq-item">
            <p className="faq-question">Q : "Et si la qualité ne correspond pas à mes attentes ?"</p>
            <p className="faq-answer">R : Toutes nos pièces sont contrôlées avant expédition. Nous sommes une société française (SIRET visible) et nous tenons à notre réputation. Si vous constatez un défaut de fabrication à réception, contactez-nous immédiatement.</p>
          </div>

          <div className="faq-item">
            <p className="faq-question">Q : "Quels sont les délais de livraison ?"</p>
            <p className="faq-answer">R : Expédition sous 48h après paiement. Livraison en France métropolitaine sous 3-5 jours ouvrés.</p>
          </div>

          <div className="faq-item">
            <p className="faq-question">Q : "Je peux avoir une facture ?"</p>
            <p className="faq-answer">R : Évidemment. Facture automatique envoyée par email dès validation du paiement. TVA française, tout est en règle.</p>
          </div>

          <div className="faq-item">
            <p className="faq-question">Q : "Vous fournissez les étiquettes prix ?"</p>
            <p className="faq-answer">R : Nous vous envoyons un document avec les prix publics conseillés + codes références pour votre gestion de stock.</p>
          </div>

          <img src="/lotbijux1.jpg" alt="Lot complet de bijoux créateurs français" className="bijoux-image" style={{ marginTop: '40px' }} />
        </section>

        {/* SECTION 7 : URGENCE */}
        <section>
          <h2>⏰ STOCKS LIMITÉS POUR NOËL 2025</h2>
          
          <p style={{ fontSize: '19px', fontWeight: 600 }}>
            Ce lot est unique. Une fois épuisé, il n'y aura pas de réapprovisionnement avant 2026.
          </p>

          <p style={{ fontSize: '18px', marginTop: '20px' }}>
            🎯 Seulement <strong>10-15 lots disponibles</strong><br/>
            → Les marchés de Noël se préparent MAINTENANT (octobre-novembre)<br/>
            → Ne ratez pas la meilleure saison de l'année
          </p>

          <p style={{ fontSize: '19px', marginTop: '25px' }}>
            Les premiers revendeurs qui ont commandé sont déjà en train de préparer leurs stands.
          </p>

          <p style={{ fontSize: '20px', fontWeight: 700, color: '#D4AF37', marginTop: '20px' }}>
            ⚡ Sécurisez votre lot maintenant et soyez prêt pour la ruée de Noël.
          </p>
        </section>

        {/* SECTION 8 : CTA FINAL */}
        <section className="final-cta">
          <h2>🎁 Prêt à Booster Vos Ventes de Fin d'Année ?</h2>
          
          <p style={{ fontSize: '22px', margin: '20px 0' }}>
            350 bijoux créateurs français • Marge 90% • Livraison 48-72h
          </p>
          
          <p style={{ fontSize: '28px', fontWeight: 800, margin: '25px 0' }}>
            LOT COMPLET : 399€ TTC
          </p>
          
          <a href="https://buy.stripe.com/eVq7sE0bc7FO99hfq98EM02" className="cta-button">
            JE COMMANDE MAINTENANT
          </a>
          
          <p style={{ fontSize: '17px', marginTop: '30px' }}>
            ✅ Paiement 100% sécurisé (Stripe)<br/>
            ✅ Livraison rapide 48-72h<br/>
            ✅ Facture automatique
          </p>

          <div style={{ marginTop: '50px', borderTop: '2px solid rgba(255,255,255,0.3)', paddingTop: '30px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '24px', marginBottom: '20px' }}>💬 Une question avant de commander ?</h3>
            
            <p style={{ fontSize: '17px', marginBottom: '25px' }}>
              Contactez-nous directement via ce formulaire, nous vous répondons sous 24h :
            </p>

            <form action="https://formspree.io/f/mrbyzegw" method="POST" className="contact-form">
              <div>
                <label htmlFor="email">Votre email :</label>
                <input type="email" name="email" id="email" required />
              </div>
              
              <div>
                <label htmlFor="message">Votre message :</label>
                <textarea name="message" id="message" required rows={5}></textarea>
              </div>
              
              <button type="submit">
                Envoyer ma question
              </button>
            </form>

            <p style={{ fontSize: '17px', marginTop: '25px' }}>
              <strong>OU par email :</strong><br/>
              📧 contact@lesbijouxfrancais.fr
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#FFFFFF' }}>LES BIJOUX FRANÇAIS</h3>
          <p>Votre destination pour les plus beaux bijoux de créateurs français à prix accessible.</p>
          <p style={{ fontSize: '16px', margin: '20px 0' }}>🇫🇷 Création artisanale • 💎 Qualité garantie • 🚚 Livraison gratuite</p>
          
          <div style={{ margin: '30px 0', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px' }}>
            <p><strong>CONTACT</strong></p>
            <p>📧 contact@lesbijouxfrancais.fr</p>
            <p>📍 69 Bis Rue du Bêle, 44300 Nantes</p>
          </div>

          <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', fontSize: '14px' }}>
            <p>
              <a href="https://lesbijouxfrancais.fr/mentions-legales" style={{ color: '#D4AF37', textDecoration: 'none', margin: '0 10px' }}>Mentions légales</a> | 
              <a href="https://lesbijouxfrancais.fr/politique-de-confidentialite" style={{ color: '#D4AF37', textDecoration: 'none', margin: '0 10px' }}>Politique de confidentialité</a>
            </p>
            <p style={{ marginTop: '15px' }}>© 2025 Les Bijoux Français - Une sélection par Solustoc SAS</p>
            <p>SIRET : 943 702 126 00013 | TVA : FR79943702126</p>
          </div>
        </footer>
      </div>
    </>
  );
}


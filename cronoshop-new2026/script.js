/* --- CONFIG --- */
    const apiKey = "AIzaSyA0XCo1e2VyEDtA3ijXGm65rjRiMDrcQ1c";

    /* --- DATA --- */
   const products = [
  {
    id: "labubu-special",
    link: "https://amzn.to/3JpXORG",
    img: "public/labubu/717VqkMEolL._AC_SX679_.jpg",
    nome: "🔥 NOVITÀ - Collezione Labubu Peluche",
    prezzo: 89.99,
    prezzo_originale: 104.99,
    sconto: 15,
    descrizione: "I peluche più amati del momento! Adorabili Labubu della collezione esclusiva con design unico e qualità premium. Perfetti per collezionisti e regalo.",
    categoria: "giocattoli",
    featured: true,
    isNew: true
  },
  {
    id: "prod1",
    link: "https://amzn.to/3Z551fa",
    img: "https://m.media-amazon.com/images/I/61hiFJPpY9L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Ultra",
    prezzo: 1199.00,
    prezzo_originale: 1599.00,
    sconto: 25,
    descrizione: "Smartphone AI con display 6.9\" QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 256GB, batteria da 5000 mAh. Colore Titanium Silverblue. Garanzia 3 anni.",
    categoria: "smartphone"
  },
  {
    id: "prod2",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL._AC_SL1500_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: 5.49,
    prezzo_originale: 6.99,
    sconto: 21,
    descrizione: "Quinoa biologica di alta qualità, ricca di proteine e fibre. Perfetta per insalate e piatti salutari.",
    categoria: "casa" // Categoria normalizzata
  },
  {
    id: "prod3",
    link: "https://www.amazon.it/dp/B0CHWV5HTM",
    img: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_SL1500_.jpg",
    nome: "Apple iPhone 15 (128 GB)",
    prezzo: 645.00,
    prezzo_originale: 879.00,
    sconto: 27,
    descrizione: "Uno dei migliori smartphone per prestazioni e qualità fotografica, ora a un prezzo imbattibile. Display Super Retina XDR da 6,1 pollici e chip A16 Bionic.",
    categoria: "smartphone"
  },
  {
    id: "prod4",
    link: "https://amzn.to/4kCH9aV",
    img: "https://m.media-amazon.com/images/I/618ha2Ia5tL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25 Smartphone AI",
    prezzo: 929.00,
    prezzo_originale: 1129.00,
    sconto: 18,
    descrizione: "Smartphone con display 6.2'' FHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna 256GB, batteria da 4.000 mAh. Include 3 anni di garanzia. Colore: Mint.",
    categoria: "smartphone"
  },
  {
    id: "prod5",
    link: "https://amzn.to/3ZAt8T4",
    img: "https://m.media-amazon.com/images/I/61Wj-1t3TwL._AC_SL1500_.jpg",
    nome: "SAMSUNG Galaxy S25 Edge (512 GB)",
    prezzo: 1299.00,
    prezzo_originale: 1549.00,
    sconto: 16,
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 200MP, RAM 12GB, memoria interna da 512GB, batteria da 3.900 mAh. Include 3 anni di garanzia. Colore: Titanium Jetblack.",
    categoria: "smartphone"
  },
  {
    id: "prod6",
    link: "https://amzn.to/45gPEUX",
    img: "https://m.media-amazon.com/images/I/61y0hmQWlsL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy S25+ Smartphone AI (512 GB)",
    prezzo: 1189.00,
    prezzo_originale: 1399.00,
    sconto: 15,
    descrizione: "Smartphone AI con display 6.7'' QHD+ Dynamic AMOLED 2X, fotocamera da 50MP, RAM 12GB, memoria interna da 512GB, batteria da 4.900 mAh. Include 3 anni di garanzia. Colore: Silver Shadow. Versione italiana.",
    categoria: "smartphone"
  },
  {
    id: "prod7",
    link: "https://amzn.to/3Z6Kc2W",
    img: "https://m.media-amazon.com/images/I/610vqacJO2L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 16e – 128 GB - Bianco",
    prezzo: 699.00,
    prezzo_originale: 829.00,
    sconto: 16,
    descrizione: "Progettato per Apple Intelligence, dotato di chip A18, autonomia grandiosa, fotocamera Fusion da 48MP e display Super Retina XDR da 6,1\".",
    categoria: "smartphone"
  },
  {
    id: "prod8",
    link: "https://amzn.to/3ZEqKut",
    img: "https://m.media-amazon.com/images/I/61cUeqowwZL._AC_SL1500_.jpg",
    nome: "Apple iPhone 16 Pro Max – 256 GB - Titanio Nero",
    prezzo: 1195.00,
    prezzo_originale: 1489.00,
    sconto: 20,
    descrizione: "Telefono 5G con controllo fotocamera avanzato, registrazione video Dolby Vision 4K a 120 fps e autonomia senza precedenti. Compatibile con AirPods.",
    categoria: "smartphone"
  },
  {
    id: "prod9",
    link: "https://amzn.to/43t1D0l",
    img: "https://m.media-amazon.com/images/I/61BGE6iu4AL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple iPhone 14 Plus – 128 GB - Azzurro",
    prezzo: 871.00,
    prezzo_originale: 1029.00,
    sconto: 15,
    descrizione: "Smartphone Apple con 128 GB di memoria, display Super Retina XDR da 6,7\", ottime prestazioni e autonomia. Un mix di potenza e stile.",
    categoria: "smartphone"
  },
  {
    id: "prod10",
    link: "https://amzn.to/4mBncTC",
    img: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL (128 GB) - Grigio Verde",
    prezzo: 879.00,
    prezzo_originale: 1099.00,
    sconto: 20,
    descrizione: "Smartphone Android sbloccato con Gemini, sistema a tripla fotocamera posteriore, batteria con autonomia fino a 24 ore e display Super Actua da 6,8\".",
    categoria: "smartphone"
  },
  {
    id: "prod11", // ID duplicato, lo rendo unico
    link: "https://amzn.to/4mBncTC",
    img: "https://m.media-amazon.com/images/I/51v1hYXGsdL._AC_SL1500_.jpg",
    nome: "Google Pixel 9 Pro XL (256 GB) - Grigio Verde",
    prezzo: 949.00,
    prezzo_originale: 1199.00,
    sconto: 21,
    descrizione: "Versione potenziata con 256GB. Smartphone Android sbloccato con Gemini, tripla fotocamera posteriore, batteria a lunga durata e display Super Actua da 6,8\".",
    categoria: "smartphone"
  },
  {
    id: "prod12",
    link: "https://amzn.to/4jlRfvO",
    img: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SL1500_.jpg",
    nome: "Apple iPhone 14 Pro Max – 128 GB (Ricondizionato)",
    prezzo: 689.00,
    prezzo_originale: 950.00,
    sconto: 27,
    descrizione: "iPhone 14 Pro Max ricondizionato in ottime condizioni, con 128 GB di memoria e finitura Deep Purple. La qualità Apple con un ottimo risparmio.",
    categoria: "smartphone"
  },
  {
    id: "prod13",
    link: "https://amzn.eu/d/j40eOtX",
    img: "https://m.media-amazon.com/images/I/619HAuZ95QL._AC_SL1500_.jpg",
    nome: "iPhone 16 (128GB) - Nero",
    prezzo: 759.00,
    prezzo_originale: 929.00,
    sconto: 18,
    descrizione: "Il nuovo standard di Apple, con prestazioni eccezionali, un sistema di fotocamere rivoluzionario e un design elegante e resistente.",
    categoria: "smartphone"
  },
  {
    id: "prod14",
    link: "https://amzn.to/3SnXwfz",
    img: "https://m.media-amazon.com/images/I/41sNR0PJCaL._AC_SX569_.jpg",
    nome: "SSC NAPOLI Maglietta Campioni",
    prezzo: 30.00,
    prezzo_originale: 45.00,
    sconto: 33,
    descrizione: "Maglia ufficiale celebrativa per i veri tifosi del Napoli. Mostra il tuo orgoglio con questa t-shirt di alta qualità.",
    categoria: "fashion"
  },
  {
    id: "prod15",
    link: "https://amzn.to/4kbOb6E",
    img: "https://m.media-amazon.com/images/I/71BHou6YJKL._AC_SY879_.jpg",
    nome: "Calvin Klein T-Shirt Uomo in Cotone",
    prezzo: 18.00,
    prezzo_originale: 35.00,
    sconto: 49,
    descrizione: "Un classico intramontabile per ogni guardaroba. Stile minimalista, 100% cotone per il massimo comfort.",
    categoria: "fashion"
  },
  {
    id: "prod16",
    link: "https://amzn.to/43xa5u6",
    img: "https://m.media-amazon.com/images/I/51V1TTs1U2L._AC_SX569_.jpg",
    nome: "adidas Squadra 25 Jersey T-Shirt Uomo",
    prezzo: 14.99,
    prezzo_originale: 23.00,
    sconto: 35,
    descrizione: "T-shirt sportiva da uomo, perfetta per allenamento e tempo libero. Tessuto traspirante per performance ottimali.",
    categoria: "fashion"
  },
  {
    id: "prod17",
    link: "https://www.amazon.it/dp/B0F1P4F8SR/",
    img: "https://m.media-amazon.com/images/I/71GSwlTsPDL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Sunsilk Crema Styling Capelli Mossi",
    prezzo: 5.99,
    prezzo_originale: 32.34,
    sconto: 81,
    descrizione: "Crema per lo styling dei capelli mossi, Onde Meravigliose. Effetto anticrespo a lunga durata per una chioma sempre perfetta.",
    categoria: "salute"
  },
  {
    id: "prod18",
    link: "https://amzn.to/4kGcGJg",
    img: "https://m.media-amazon.com/images/I/6171T++Z2mL._AC_SL1095_.jpg",
    nome: "Caffè Borbone Cialda Compostabile, Miscela Oro - 100 Cialde",
    prezzo: 15.19,
    prezzo_originale: 22.34,
    sconto: 32,
    descrizione: "L'aroma intenso e il gusto equilibrato della miscela Oro, in pratiche cialde compostabili. 100% compatibili.",
    categoria: "casa"
  },
  {
    id: "prod19",
    link: "https://amzn.to/3Fbh43W",
    img: "https://m.media-amazon.com/images/I/8120xtA5GaL._AC_SL1500_.jpg",
    nome: "King C. Gillette Kit Regolabarba Uomo",
    prezzo: 27.37,
    prezzo_originale: 39.99,
    sconto: 32,
    descrizione: "Kit professionale per la cura della barba: include testina, 3 pettini regolatori, spazzolina e caricatore. Un'ottima idea regalo.",
    categoria: "salute"
  },
  {
    id: "prod20",
    link: "https://amzn.to/3Ssmcnb",
    img: "https://m.media-amazon.com/images/I/31SLM5sJK4L.__AC_SY300_SX300_QL70_ML2_.jpg",
    nome: "Samsung Galaxy S24 Ultra – 12GB / 256GB - Black",
    prezzo: 864.90,
    prezzo_originale: 1499.00,
    sconto: 42,
    descrizione: "Smartphone top di gamma Samsung, 12GB RAM, 256GB memoria. Prestazioni estreme e design premium in colorazione Phantom Black.",
    categoria: "smartphone"
  },
  {
    id: "prod21",
    link: "https://amzn.to/3SUojjE",
    img: "https://m.media-amazon.com/images/I/812azAWbm2L.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Oral-B Testine Di Ricambio Originali (10 pezzi)",
    prezzo: 24.99,
    prezzo_originale: 39.99,
    sconto: 38,
    descrizione: "Confezione da 10 testine Pro Cross Action per spazzolino elettrico Oral-B. Ricambio originale per una pulizia profonda.",
    categoria: "salute"
  },
  {
    id: "prod22",
    link: "https://amzn.to/4jhgwHr",
    img: "https://m.media-amazon.com/images/I/51B45gaTgjL._AC_SL1000_.jpg",
    nome: "Amazon Fire TV Stick HD (Ultimo modello)",
    prezzo: 28.99,
    prezzo_originale: 49.99,
    sconto: 42,
    descrizione: "Streaming HD con TV gratuita e in diretta, telecomando vocale Alexa e controlli per la Casa Intelligente.",
    categoria: "tech"
  },
  {
    id: "prod23",
    link: "https://amzn.to/4dCu1QL",
    img: "https://m.media-amazon.com/images/I/618HDC8rPXL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Bronzi® Portafoglio Uomo Slim con Protezione RFID",
    prezzo: 22.99,
    prezzo_originale: 29.99,
    sconto: 23,
    descrizione: "Portacarte uomo e donna, portatessere con protezione RFID, porta carte di credito e portamonete. Mini, slim, con box regalo.",
    categoria: "fashion"
  },
  {
    id: "prod24",
    link: "https://amzn.to/4kEfeHI",
    img: "https://m.media-amazon.com/images/I/61oxHY8kFbL._AC_SX569_.jpg",
    nome: "Vittorio Y Camicia Donna in Cotone e Lino",
    prezzo: 19.99,
    prezzo_originale: 28.99,
    sconto: 31,
    descrizione: "Camicia casual a tinta unita, comoda e traspirante, perfetta per la stagione calda. Resi gratuiti su Amazon.",
    categoria: "fashion"
  },
  {
    id: "prod25",
    link: "https://amzn.to/4dF2SwD",
    img: "https://m.media-amazon.com/images/I/618FhFPg8+L._AC_SX575_.jpg",
    nome: "Nike Air Force 1 '07 Lv8 4",
    prezzo: 116.00,
    prezzo_originale: 140.00,
    sconto: 17,
    descrizione: "Scarpe da basket da uomo, modello iconico Nike Air Force 1 con design classico e comfort duraturo.",
    categoria: "fashion"
  },
  // Continuo a processare e standardizzare tutti gli altri prodotti...
  {
    id: "prod26",
    link: "https://amzn.to/3Z7S8Rr",
    img: "https://m.media-amazon.com/images/I/41vC0GMKWJL._AC_SY695_.jpg",
    nome: "adidas Breaknet Lifestyle Court Lace Shoes Bambino",
    prezzo: 28.80,
    prezzo_originale: 45.00,
    sconto: 36,
    descrizione: "Scarpe da tennis unisex per bambini e ragazzi. Offerta a tempo con un notevole risparmio.",
    categoria: "fashion"
  },
  {
    id: "prod27",
    link: "https://amzn.to/4dCt9LX",
    img: "https://m.media-amazon.com/images/I/71XHPuLiHVL._AC_SY606_.jpg",
    nome: "Nike Everyday Cush Crew Calze Uomo (Pacco da 3)",
    prezzo: 14.99,
    prezzo_originale: 19.99,
    sconto: 25,
    descrizione: "Calze da uomo Nike, modello Everyday Cush Crew, ideali per comfort quotidiano e performance sportive.",
    categoria: "fashion"
  },
  {
    id: "prod28",
    link: "https://amzn.to/4kFlpLJ",
    img: "https://m.media-amazon.com/images/I/71ZfLtLMYyL._AC_SX679_.jpg",
    nome: "Smart Sir Calzini Sportivi Uomo e Donna (4 paia)",
    prezzo: 9.49,
    prezzo_originale: 14.99,
    sconto: 37,
    descrizione: "Calzini lunghi in cotone di alta qualità, comodi e traspiranti. Prezzo più basso degli ultimi 30 giorni.",
    categoria: "fashion"
  },
  {
    id: "prod29",
    link: "https://amzn.to/3Z7eYZz",
    img: "https://m.media-amazon.com/images/I/51kcic+JN-L._AC_SL1095_.jpg",
    nome: "Caffè Borbone Respresso, Miscela Blu - 100 Capsule",
    prezzo: 19.49,
    prezzo_originale: 25.99,
    sconto: 25,
    descrizione: "Caffè Borbone Respresso, Miscela Blu - 100 Capsule - Compatibili con le Macchine ad uso domestico Nespresso.",
    categoria: "casa"
  },
  {
    id: "prod30",
    link: "https://amzn.to/43PvEHy",
    img: "https://m.media-amazon.com/images/I/81irfL63EQL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Samsung Galaxy S22+ 5G – 128GB (Ricondizionato)",
    prezzo: 284.99,
    prezzo_originale: 450.00,
    sconto: 37,
    descrizione: "Smartphone ricondizionato con SIM singola + e-SIM, colore Phantom Black. Risparmia 155,00€ rispetto al prezzo nuovo.",
    categoria: "smartphone"
  },
  {
    id: "prod31",
    link: "https://amzn.to/3HsKGdy",
    img: "https://m.media-amazon.com/images/I/61CY-+ZEN6L._AC_SY300_SX300_.jpg",
    nome: "Samsung Galaxy S21 Ultra 5G – 128GB (Ricondizionato)",
    prezzo: 294.99,
    prezzo_originale: 480.00,
    sconto: 39,
    descrizione: "Smartphone ricondizionato, RAM 12GB, Dual SIM (e-SIM), colore Nero. Ottima occasione con grande risparmio.",
    categoria: "smartphone"
  },
  {
    id: "prod32",
    link: "https://amzn.to/3FcZUD1",
    img: "https://m.media-amazon.com/images/I/61pc4vR8BoL._AC_SL1500_.jpg",
    nome: "Samsung Galaxy A16 (128 GB)",
    prezzo: 120.98,
    prezzo_originale: 179.90,
    sconto: 33,
    descrizione: "Samsung Galaxy A16 Smartphone Android 14, Display Super AMOLED 6.7\" FHD+, 4GB RAM, 128GB, Batteria 5.000 mAh, Resistenza IP54.",
    categoria: "smartphone"
  },
  {
    id: "prod33",
    link: "https://amzn.to/43ECrTf",
    img: "https://m.media-amazon.com/images/I/616+oTRo6-L._AC_SL1500_.jpg",
    nome: "Samsung Galaxy A56 5G (256 GB)",
    prezzo: 342.68,
    prezzo_originale: 499.90,
    sconto: 31,
    descrizione: "Samsung Galaxy A56 5G, smartphone Android, 256 GB di memoria, 8 GB di RAM, antracite, grande schermo, lunga durata della batteria.",
    categoria: "smartphone"
  },
  {
    id: "prod34",
    link: "https://amzn.to/43gLxGT",
    img: "https://m.media-amazon.com/images/I/61waTtq8hCL._AC_SL1500_.jpg",
    nome: "GALAXY A26 5G – 8GB + 256GB - Black",
    prezzo: 234.69,
    prezzo_originale: 319.90,
    sconto: 27,
    descrizione: "Smartphone GALAXY A26 5G con 8GB di RAM e 256GB di memoria interna. Ottimo rapporto qualità-prezzo.",
    categoria: "smartphone"
  },
  {
    id: "prod35",
    link: "https://amzn.to/43RhVzW",
    img: "https://m.media-amazon.com/images/I/713AzRHXYeL._AC_SL1500_.jpg",
    nome: "UpCircle Cotton fioc di bambù – 200 pezzi",
    prezzo: 5.49,
    prezzo_originale: 7.99,
    sconto: 31,
    descrizione: "UpCircle Cotton fioc di bambù, biodegradabili, sostenibili, senza plastica, completamente riciclabili – un punto fermo per qualsiasi bagno.",
    categoria: "salute"
  },
  {
    id: "prod36",
    link: "https://amzn.to/3FoIjIi",
    img: "https://m.media-amazon.com/images/I/61MKKroaphL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Supradyn Energy Multivitaminico – 70 Caramelle",
    prezzo: 11.19,
    prezzo_originale: 19.90,
    sconto: 44,
    descrizione: "Integratore multivitaminico con vitamine A, B, C, D, E e Coenzima Q10. 70 caramelle gommose al gusto ciliegia, lampone e arancia.",
    categoria: "salute"
  },
  {
    id: "prod37",
    link: "https://amzn.to/4jnbTvu",
    img: "https://m.media-amazon.com/images/I/51HcFzY9EmL._AC_SL1080_.jpg",
    nome: "ZPAPER - 6 Rotoli Asciugatutto Professionali",
    prezzo: 29.95,
    prezzo_originale: 35.00,
    sconto: 14,
    descrizione: "Pura cellulosa, 2 veli, confezionati. Rotoloni asciugatutto multiuso per pulire i disastri in casa e in ambienti professionali.",
    categoria: "casa"
  },
  {
    id: "prod38",
    link: "https://amzn.to/4jrHVq9",
    img: "https://m.media-amazon.com/images/I/91krk-VZlwL._AC_SL1500_.jpg",
    nome: "Amazon Basics - 20 Sacchetti sottovuoto con pompa",
    prezzo: 27.19,
    prezzo_originale: 32.99,
    sconto: 18,
    descrizione: "20 unità con pompa a mano, per risparmiare spazio con efficienza e semplicità. Ideali per vestiti e piumoni.",
    categoria: "casa"
  },
  {
    id: "prod39",
    link: "https://m.media-amazon.com/images/I/7107Ze-04CL._AC_SL1500_.jpg",
    nome: "Amazon Basics - 8 Batterie Ricaricabili AA NiMH (2000 mAh)",
    prezzo: 13.52,
    prezzo_originale: 16.99,
    sconto: 20,
    descrizione: "Ricaricabili fino a 1000 volte, pre-caricate e pronte all'uso. Energia affidabile per i tuoi dispositivi.",
    categoria: "tech"
  },
  {
    id: "prod40",
    link: "https://m.media-amazon.com/images/I/812hFM3JmTL._AC_SL1500_.jpg",
    nome: "Fabuloso Ammorbidente Concentrato - 4x1,25L (224 lavaggi)",
    prezzo: 18.72,
    prezzo_originale: 24.99,
    sconto: 25,
    descrizione: "Profumo Fresco Mattino. Fragranza attivata dal movimento, facilita la stiratura e lascia i capi morbidi e profumati.",
    categoria: "casa"
  },
  {
    id: "prod41",
    link: "https://amzn.to/4mChp0i",
    img: "https://m.media-amazon.com/images/I/61QKPdoU5TL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "ZPAPER - 60 Rotoli di Carta Igienica 2 Veli",
    prezzo: 32.36,
    prezzo_originale: 39.90,
    sconto: 19,
    descrizione: "60 rotoli, 250 fogli per rotolo, 2 veli, morbida e resistente. Ideale per casa o ufficio.",
    categoria: "casa"
  },
  {
    id: "prod42",
    link: "https://amzn.to/3Hfvl04",
    img: "https://m.media-amazon.com/images/I/617i66nvMxL._AC_SY741_.jpg",
    nome: "Vitamina B12 Vegan 365 Compresse PiùLife",
    prezzo: 14.30,
    prezzo_originale: 19.99,
    sconto: 28,
    descrizione: "Vitamina B12 Cianocobalamina, per sistema immunitario e riduzione stanchezza fisica e mentale. 1000 mcg.",
    categoria: "salute"
  },
  {
    id: "prod43",
    link: "https://amzn.to/4dM4hSk",
    img: "https://m.media-amazon.com/images/I/71uuRXQz1JL._AC_SL1500_.jpg",
    nome: "Magnesio Citrato Vegano Tamponato (240 Capsule)",
    prezzo: 17.09,
    prezzo_originale: 22.90,
    sconto: 25,
    descrizione: "Con 444mg polvere elementare, riduce stanchezza e affaticamento, senza additivi né glutine.",
    categoria: "salute"
  },
  {
    id: "prod44",
    link: "https://amzn.to/4jq1SOj",
    img: "https://m.media-amazon.com/images/I/71GXfnVPsPL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Zzzquil Natura Integratore Per Il Sonno (144 pastiglie)",
    prezzo: 36.99,
    prezzo_originale: 49.90,
    sconto: 26,
    descrizione: "Melatonina con estratti di lavanda, valeriana e camomilla. Maxi formato 2x72 pastiglie gommose per favorire il sonno.",
    categoria: "salute"
  },
  {
    id: "prod45",
    link: "https://amzn.to/3Z3U39Q",
    img: "https://m.media-amazon.com/images/I/71NY7I+OLQL._AC_SY300_SX300_.jpg",
    nome: "Novanight Tripla Azione Melatonina per Dormire",
    prezzo: 23.21,
    prezzo_originale: 31.90,
    sconto: 27,
    descrizione: "Integratore per disturbi del sonno, senza glutine. Contiene melatonina, escolzia, passiflora e melissa. Non induce dipendenza.",
    categoria: "salute"
  },
  {
    id: "prod46",
    link: "https://amzn.to/43PEXay",
    img: "https://m.media-amazon.com/images/I/61NUQEFRTFL._AC_SX522_.jpg",
    nome: "SWISSE Ultivit - Multivitaminico Ragazza (60 Compresse)",
    prezzo: 13.46,
    prezzo_originale: 21.90,
    sconto: 39,
    descrizione: "Multivitaminico con zinco e vitamine per riduzione stanchezza e supporto sistema immunitario. Integratore con ferro, made in Italy.",
    categoria: "salute"
  },
  {
    id: "prod47",
    link: "https://amzn.to/4mAMTnv",
    img: "https://m.media-amazon.com/images/I/51AyIO7mVXL._AC_SX569_.jpg",
    nome: "N-K Anello Intelligente Cambia Colore con Temperatura",
    prezzo: 1.82,
    prezzo_originale: 9.99,
    sconto: 82,
    descrizione: "Anello per coppie e amanti, cambia colore in base alla temperatura e all’umore. Unisex, in acciaio inox di alta qualità e design alla moda.",
    categoria: "fashion"
  },
  {
    id: "prod48",
    link: "https://amzn.to/4jlkrDe",
    img: "https://m.media-amazon.com/images/I/81Ev1JwtPhL._AC_SX569_.jpg",
    nome: "Amazon Essentials T-Shirt Basic Uomo - Pacco da 6",
    prezzo: 25.99,
    prezzo_originale: 34.99,
    sconto: 26,
    descrizione: "Magliette girocollo in cotone, versatili e morbide, ideali per ogni occasione. Qualità Amazon Essentials.",
    categoria: "fashion"
  },
  {
    id: "prod49",
    link: "https://amzn.to/3SUAqNE",
    img: "https://m.media-amazon.com/images/I/61KSB-CGSyL._AC_SX569_.jpg",
    nome: "ALPIDEX T-Shirt Uomo - Confezione da 5",
    prezzo: 39.99,
    prezzo_originale: 49.99,
    sconto: 20,
    descrizione: "Magliette da uomo con girocollo disponibili in varie taglie dalla S alla 5XL. Perfette per tutti i giorni, comode e resistenti.",
    categoria: "fashion"
  },
  {
    id: "prod50",
    link: "https://amzn.to/3Z60eKn",
    img: "https://m.media-amazon.com/images/I/81Auh7uuz1L._AC_SX466_.jpg",
    nome: "Amazon Essentials Felpa con Cappuccio Donna",
    prezzo: 19.60,
    prezzo_originale: 28.00,
    sconto: 30,
    descrizione: "Felpa da donna in pile, con cappuccio e cerniera. Calda, comoda e ideale per l’uso quotidiano. Disponibile in vari colori.",
    categoria: "fashion"
  },
  {
    id: "prod51",
    link: "https://amzn.to/43qkEio",
    img: "https://m.media-amazon.com/images/I/61V8VUE1dFL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Amazfit Bip 5 Smartwatch con Schermo Grande",
    prezzo: 57.99,
    prezzo_originale: 89.90,
    sconto: 35,
    descrizione: "Smartwatch con chiamate Bluetooth, Alexa integrata, GPS, durata batteria 10 giorni, fitness tracker con battito cardiaco e monitoraggio ossigeno.",
    categoria: "tech"
  },
  {
    id: "prod52",
    link: "https://amzn.to/4jlczlj",
    img: "https://m.media-amazon.com/images/I/51Kmnt241oL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Imou 3MP Telecamera Wi-Fi Interno 360°",
    prezzo: 22.99,
    prezzo_originale: 39.99,
    sconto: 43,
    descrizione: "Videocamera di sorveglianza 2K con tracciamento del movimento, rilevamento umano, audio bidirezionale e connessione 2,4GHz.",
    categoria: "tech"
  },
  {
    id: "prod53",
    link: "https://amzn.to/43GhYgW",
    img: "https://m.media-amazon.com/images/I/81UE75N+r1L._AC_SL1500_.jpg",
    nome: "SEHMUA 4G LTE Telecamera Esterno senza Fili con Pannello Solare",
    prezzo: 51.43,
    prezzo_originale: 69.99,
    sconto: 27,
    descrizione: "Telecamera con Sim, 2K 360 PTZ e batterie. Amazon Choice. Offerta a tempo! Prezzo più basso degli ultimi 30 giorni.",
    categoria: "tech"
  },
  {
    id: "prod54",
    link: "https://amzn.to/4kg3QC7",
    img: "https://m.media-amazon.com/images/I/71dy+yYz4iL._AC_SX522_.jpg",
    nome: "Amazon Essentials Maglietta Intima Scollo A V (Pacco da 6)",
    prezzo: 25.99,
    prezzo_originale: 34.99,
    sconto: 26,
    descrizione: "Pacco da 6 magliette intime da uomo, traspiranti e in cotone, perfette per il comfort quotidiano.",
    categoria: "fashion"
  },
  {
    id: "prod55",
    link: "https://amzn.to/4mB7UhK",
    img: "https://m.media-amazon.com/images/I/71b8mpCMTOL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "by Amazon Quinoa biologica, 500g",
    prezzo: 5.49,
    prezzo_originale: 6.99,
    sconto: 21,
    descrizione: "Quinoa biologica certificata, ideale per un'alimentazione sana e bilanciata.",
    categoria: "casa"
  },
  {
    id: "prod56",
    link: "https://amzn.to/3HusXTd",
    img: "https://m.media-amazon.com/images/I/71Cm4at5uAL._AC_SL1500_.jpg",
    nome: "NEW'C 3 Pezzi, Vetro Temperato per iPhone 15/16",
    prezzo: 7.89,
    prezzo_originale: 12.99,
    sconto: 39,
    descrizione: "Pellicola protettiva anti graffio - ultra resistente - trasparente HD - strumento di installazione facile incluso.",
    categoria: "smartphone"
  },
  {
    id: "prod57",
    link: "https://amzn.to/3FozrT6",
    img: "https://m.media-amazon.com/images/I/71+5mYCqy7S._AC_SX342_SY445_.jpg",
    nome: "Apple AirTag (1 pezzo)",
    prezzo: 28.99,
    prezzo_originale: 39.00,
    sconto: 26,
    descrizione: "Dispositivo di localizzazione Bluetooth per ritrovare oggetti come chiavi, zaini e altro tramite l'app Dov'è su iPhone.",
    categoria: "tech"
  },
  {
    id: "prod58",
    link: "https://amzn.to/3T8pQCT",
    img: "https://m.media-amazon.com/images/I/71fRnkkqVdL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "HP 305 Nero e Tricromia, 2 Cartucce Originali",
    prezzo: 24.99,
    prezzo_originale: 31.99,
    sconto: 22,
    descrizione: "Compatibili con stampanti HP DeskJet serie 2300, 2700, 2800, 4200, 4100, HP Envy 6010, 6020, 6030 e 6040.",
    categoria: "tech"
  },
  {
    id: "prod59",
    link: "https://amzn.to/4dTbdNq",
    img: "https://m.media-amazon.com/images/I/61DvMw16ITL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Apple AirPods 4 con custodia USB-C",
    prezzo: 128.99,
    prezzo_originale: 159.00,
    sconto: 19,
    descrizione: "Auricolari wireless Bluetooth con audio spaziale personalizzato, resistenza al sudore e all’acqua, chip H2, fino a 24 ore di autonomia.",
    categoria: "tech"
  },
  {
    id: "prod60",
    link: "https://amzn.to/3SEY4xJ",
    img: "https://m.media-amazon.com/images/I/61fSyWVkrYL.__AC_SY300_SX300_QL70_ML2_.jpg",
    nome: "Tapo C200 Telecamera Wi-Fi Interno FHD 360°",
    prezzo: 21.99,
    prezzo_originale: 29.99,
    sconto: 27,
    descrizione: "Scelta Amazon. Visione Notturna, Audio Bidirezionale, Rilevamento di movimento e notifiche, Allarme acustico e luminoso integrato.",
    categoria: "tech"
  },
  {
    id: "prod61",
    link: "https://amzn.to/4kCXBZd",
    img: "https://m.media-amazon.com/images/I/61c9X3+N4AL._AC_SX300_SY300_.jpg",
    nome: "Caricatore USB C Rapido 40W 4 Porte",
    prezzo: 14.99,
    prezzo_originale: 20.99,
    sconto: 29,
    descrizione: "Presa USB Multipla PD & QC3.0 per Samsung S22/S23/S24, iPhone 15/16/14. Disponibile anche con coupon.",
    categoria: "tech"
  },
  {
    id: "prod62",
    link: "https://amzn.to/3FUVgJY",
    img: "https://m.media-amazon.com/images/I/91MSouIX7HL._AC_SX466_.jpg",
    nome: "Amazon Essentials Felpa Uomo con Cappuccio e Zip",
    prezzo: 21.60,
    prezzo_originale: 30.00,
    sconto: 28,
    descrizione: "Felpa in pile con cappuccio, comoda e calda, adatta a tutte le taglie, anche Big & Tall. Design classico con zip frontale.",
    categoria: "fashion"
  },
  {
    id: "prod63",
    link: "https://amzn.to/4mZh5sw",
    img: "https://m.media-amazon.com/images/I/61aAOFdLzJL.__AC_SX395_SY395_QL70_ML2_.jpg",
    nome: "ASICS Gel-Excite 9 Scarpe da Corsa, Uomo",
    prezzo: 127.66,
    prezzo_originale: 160.00,
    sconto: 20,
    descrizione: "Scarpe da corsa leggere e ammortizzate, ideali per allenamenti e uso quotidiano. Disponibili in varie taglie EU.",
    categoria: "fashion"
  },
  {
    id: "prod64",
    link: "https://amzn.to/3SRisMa",
    img: "https://m.media-amazon.com/images/I/91MEK1bV2lL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Joma Men's Supernova III T-Shirt",
    prezzo: 21.99,
    prezzo_originale: 29.99,
    sconto: 27,
    descrizione: "Maglietta sportiva da uomo, leggera e traspirante. Disponibile in varie taglie dalla 6XS alla XL.",
    categoria: "fashion"
  },
  {
    id: "prod65",
    link: "https://www.amazon.com/dp/B0CBRR1GZK",
    img: "https://m.media-amazon.com/images/I/71EnaI2yCdL.__AC_SX342_SY445_QL70_ML2_.jpg",
    nome: "Build Your Brand T-Shirt Uomo Basic",
    prezzo: 6.50,
    prezzo_originale: 12.00,
    sconto: 46,
    descrizione: "Una maglietta basic che ogni uomo deve avere. Taglio regolare e scollo rotondo a coste.",
    categoria: "fashion"
  },
  {
    id: "prod66",
    link: "https://www.amazon.com/dp/B096YNRT7Z",
    img: "https://m.media-amazon.com/images/I/71rDrJKm85L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Pantaloni Uomo Slim Fit",
    prezzo: 21.93,
    prezzo_originale: 29.90,
    sconto: 27,
    descrizione: "Ascoltiamo i feedback dei clienti e perfezioniamo ogni dettaglio per offrire abbigliamento comodo e di alta qualità.",
    categoria: "fashion"
  },
  {
    id: "prod67",
    link: "https://www.amazon.com/dp/B06XWND2ST",
    img: "https://m.media-amazon.com/images/I/816fhPoCRyS.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Camicia Casual in Popeline Uomo",
    prezzo: 24.00,
    prezzo_originale: 32.00,
    sconto: 25,
    descrizione: "Un marchio Amazon. Vestibilità regular e maniche lunghe per un look classico e versatile.",
    categoria: "fashion"
  },
  {
    id: "prod68",
    link: "https://www.amazon.com/dp/B0B129TD65",
    img: "https://m.media-amazon.com/images/I/51UaQx1b+1L._AC_SX342_SY445_.jpg",
    nome: "LINVO Occhiali da Sole Polarizzati Rettangolari",
    prezzo: 12.00,
    prezzo_originale: 19.99,
    sconto: 40,
    descrizione: "Occhiali da sole classici per uomo e donna, con protezione 100% UV400. Ideali per guida e pesca.",
    categoria: "fashion"
  },
  {
    id: "prod69",
    link: "https://www.amazon.com/dp/B07G4SRQC8",
    img: "https://m.media-amazon.com/images/I/81m7hD4I3aL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Amazon Basics - Trolley Rigido da Cabina (55 cm)",
    prezzo: 34.00,
    prezzo_originale: 55.00,
    sconto: 38,
    descrizione: "Bagaglio a mano con rotelle girevoli, approvato per Ryanair, Easyjet e altre compagnie aeree.",
    categoria: "casa"
  },
  {
    id: "prod70",
    link: "https://www.amazon.com/dp/B09L8CZKRH",
    img: "https://m.media-amazon.com/images/I/71LYN2Q16iL.__AC_SY395_SX395_QL70_ML2_.jpg",
    nome: "Amazon Essentials Sandalo Infradito Donna",
    prezzo: 19.00,
    prezzo_originale: 25.00,
    sconto: 24,
    descrizione: "Sandalo casual con cinturino alla caviglia, comodo ed elegante per l'estate.",
    categoria: "fashion"
  },
  {
    id: "prod71",
    link: "https://www.amazon.com/dp/B0C6DZKJ1X",
    img: "https://m.media-amazon.com/images/I/61Y5pM28BuL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials T-Shirt Serafino Uomo (Pacco da 2)",
    prezzo: 26.00,
    prezzo_originale: 35.00,
    sconto: 26,
    descrizione: "T-shirt a maniche corte in cotone, vestibilità slim. Un capo essenziale per il guardaroba maschile.",
    categoria: "fashion"
  },
  {
    id: "prod72",
    link: "https://www.amazon.com/dp/B08JHP1L86",
    img: "https://m.media-amazon.com/images/I/81qIK780N4L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Jeans Uomo Elasticizzati",
    prezzo: 27.90,
    prezzo_originale: 40.00,
    sconto: 30,
    descrizione: "Un marchio Amazon - Questi classici jeans a 5 tasche dalla vestibilità sportiva sono leggermente elasticizzati.",
    categoria: "fashion"
  },
  {
    id: "prod73",
    link: "https://www.amazon.com/dp/B07Z6JM8TQ",
    img: "https://m.media-amazon.com/images/I/71tUoMNs8fL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Slip Donna in Cotone (Pacco Multiplo)",
    prezzo: 12.05,
    prezzo_originale: 18.00,
    sconto: 33,
    descrizione: "Intimo da donna traspirante e comodo, disponibile anche in taglie forti. Qualità e comfort per tutti i giorni.",
    categoria: "fashion"
  },
  {
    id: "prod74",
    link: "https://www.amazon.com/dp/B0CD2SHVLZ",
    img: "https://m.media-amazon.com/images/I/81cKZpZzm5L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Basics - Zaino da Viaggio / Bagaglio a Mano",
    prezzo: 34.00,
    prezzo_originale: 45.00,
    sconto: 24,
    descrizione: "Zaino da viaggio versatile e spazioso, perfetto come bagaglio a mano per i tuoi viaggi.",
    categoria: "casa"
  },
  {
    id: "prod75",
    link: "https://www.amazon.com/dp/B088DG714B",
    img: "https://m.media-amazon.com/images/I/71vbSv0DSIL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Calzini Corti Tobilleros Uomo (9 Paia)",
    prezzo: 16.00,
    prezzo_originale: 22.99,
    sconto: 30,
    descrizione: "Confezione convenienza da 9 paia di calzini corti, comodi e traspiranti per l'uso quotidiano.",
    categoria: "fashion"
  },
  {
    id: "prod76",
    link: "https://www.amazon.com/dp/B0CB21FKJ3",
    img: "https://m.media-amazon.com/images/I/71E-K37BdsL.__AC_SY395_SX395_QL70_ML2_.jpg",
    nome: "Skechers Uno Stand On Air, Scarpe da Ginnastica Uomo",
    prezzo: 19.00,
    prezzo_originale: 65.00,
    sconto: 71,
    descrizione: "Sneaker Durabuck con lacci e soletta in memory foam raffreddata ad aria per un comfort imbattibile.",
    categoria: "fashion"
  },
  {
    id: "prod77",
    link: "https://www.amazon.com/dp/B0BG8JH3H9",
    img: "https://m.media-amazon.com/images/I/81+fhlfEC0L._AC_SX342_SY445_.jpg",
    nome: "Amazon Essentials Boxer in Jersey di Cotone (Pacco da 5)",
    prezzo: 26.80,
    prezzo_originale: 35.00,
    sconto: 23,
    descrizione: "Boxer da uomo comodi e di alta qualità, disponibili anche in taglie forti. Un must-have per tutti i giorni.",
    categoria: "fashion"
  },
  {
    id: "prod78",
    link: "https://www.amazon.com/dp/B07XB1Y3W2",
    img: "https://m.media-amazon.com/images/I/81tCQ7KumJL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Jeans Uomo Taglio Dritto Bootcut",
    prezzo: 35.00,
    prezzo_originale: 45.00,
    sconto: 22,
    descrizione: "Un marchio Amazon - Il denim classico e lo stile a cinque tasche mettono in risalto questi jeans perfetti per tutti i giorni.",
    categoria: "fashion"
  },
  {
    id: "prod79",
    link: "https://www.amazon.com/dp/B08WK5MQ1H",
    img: "https://m.media-amazon.com/images/I/91FFTV5JTAL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Felpa Foderata in Pile Bambina",
    prezzo: 16.00,
    prezzo_originale: 22.00,
    sconto: 27,
    descrizione: "Felpa con cappuccio e zip per bambine e ragazze, calda e morbida per tenerle al caldo quando le temperature scendono.",
    categoria: "fashion"
  },
  {
    id: "prod80",
    link: "https://www.amazon.com/dp/B0BLSY2RFH",
    img: "https://m.media-amazon.com/images/I/61Cwt7x2zZL.__AC_SX395_SY395_QL70_ML2_.jpg",
    nome: "Sneakers da Uomo con Suola Morbida",
    prezzo: 42.00,
    prezzo_originale: 55.00,
    sconto: 24,
    descrizione: "Sneakers eleganti con tacco a zeppa, suola morbida e traspirante. Perfette per un look casual e confortevole.",
    categoria: "fashion"
  },
  {
    id: "prod81",
    link: "https://www.amazon.com/dp/B08X19T334",
    img: "https://m.media-amazon.com/images/I/81nOh4knyPL.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Jeans Elasticizzati Uomo, Taglio Dritto",
    prezzo: 27.10,
    prezzo_originale: 38.00,
    sconto: 29,
    descrizione: "Jeans a vita alta con taglio dritto, realizzati con tessuto elasticizzato per il massimo comfort e una vestibilità perfetta.",
    categoria: "fashion"
  },
  {
    id: "prod82",
    link: "https://www.amazon.com/dp/B0CWDXTKT3",
    img: "https://m.media-amazon.com/images/I/81IpfF7o41L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "SOXCO Calze da Lavoro Rinforzate Uomo (10 Paia)",
    prezzo: 19.99,
    prezzo_originale: 28.99,
    sconto: 31,
    descrizione: "La soluzione definitiva per chiunque abbia bisogno di calze da lavoro durevoli e confortevoli. Tallone e punta rinforzati.",
    categoria: "fashion"
  },
  {
    id: "prod83",
    link: "https://www.amazon.com/dp/B097RV1D6R",
    img: "https://m.media-amazon.com/images/I/81mZMvuvfYS.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials T-Shirt Donna Manica Corta (Taglie Forti)",
    prezzo: 13.00, // Prezzo originale sembrava un errore, l'ho corretto
    prezzo_originale: 18.00,
    sconto: 28,
    descrizione: "Un marchio Amazon - Questa comoda t-shirt combina uno scollo rotondo con una linea fluida. Disponibile in taglie forti.",
    categoria: "fashion"
  },
  {
    id: "prod84",
    link: "https://www.amazon.com/dp/B0B9MX76FB",
    img: "https://m.media-amazon.com/images/I/9101cym+dhL._AC_SY300_SX300_.jpg",
    nome: "Popglory Smartwatch Uomo Donna con 2 Cinturini",
    prezzo: 39.00,
    prezzo_originale: 59.99,
    sconto: 35,
    descrizione: "Orologio digitale con chiamate e WhatsApp, contapassi, assistente vocale, cardiofrequenzimetro 24H, SpO2 e monitoraggio del sonno.",
    categoria: "tech"
  },
  {
    id: "prod85",
    link: "https://www.amazon.com/dp/B08X2H31K5",
    img: "https://m.media-amazon.com/images/I/81CWjDoZb6L.__AC_SY445_SX342_QL70_ML2_.jpg",
    nome: "Amazon Essentials Pantaloni Jogger in Pile Uomo",
    prezzo: 17.00,
    prezzo_originale: 25.00,
    sconto: 32,
    descrizione: "Pantaloni da jogging con vestibilità rilassata, perfetti per il tempo libero e lo sport. Comodi e di alta qualità.",
    categoria: "fashion"
  },
  {
    id: "prod86",
    link: "https://www.amazon.com/dp/B06Y57GNY1",
    img: "https://m.media-amazon.com/images/I/91lDjTg1IyL.__AC_SX300_SY300_QL70_ML2_.jpg",
    nome: "Amazon Basics - Zaino da Escursionismo con Telaio Interno",
    prezzo: 60.48,
    prezzo_originale: 80.00,
    sconto: 24,
    descrizione: "Zaino tecnico con telaio interno e cerniera antipioggia, ideale per escursioni di più giorni e avventure all'aperto.",
    categoria: "casa"
  },
  {
    id: "prod87",
    link: "https://www.amazon.it/dp/B0DQ8H5BPK",
    img: "https://m.media-amazon.com/images/I/51riIg7rjlL._AC_SX679_.jpg",
    nome: "ECOVACS X8 PRO OMNI Robot Aspirapolvere e Lavapavimenti",
    prezzo: 849.00,
    prezzo_originale: 1059.00,
    sconto: 20,
    descrizione: "Robot aspirapolvere intelligente con funzione di autopulizia, autosvuotamento e autolavaggio, ideale per una pulizia completa e automatica.",
    categoria: "casa"
  }
];

    /* --- THEMES (HEX) --- */
    const presets = {
        'light': { name: 'Chiaro', bg: '#F2F2F7', card: '#FFFFFF', text: '#000000', primary: '#007AFF', accent: '#5856D6' },
        'dark': { name: 'Scuro', bg: '#000000', card: '#1C1C1E', text: '#FFFFFF', primary: '#0A84FF', accent: '#BF5AF2' },
        'sunset': { name: 'Tramonto', bg: '#FFF7ED', card: '#FFFFFF', text: '#431407', primary: '#EA580C', accent: '#F97316' },
        'forest': { name: 'Foresta', bg: '#022C22', card: '#064E3B', text: '#ECFDF5', primary: '#10B981', accent: '#34D399' },
        'ocean': { name: 'Oceano', bg: '#0F172A', card: '#1E293B', text: '#F0F9FF', primary: '#38BDF8', accent: '#7DD3FC' },
        'cyber': { name: 'Cyberpunk', bg: '#09090B', card: '#18181B', text: '#E4E4E7', primary: '#F472B6', accent: '#22D3EE' },
        'luxury': { name: 'Lusso', bg: '#000000', card: '#111111', text: '#FAFAF9', primary: '#D4AF37', accent: '#EAB308' },
        'rose': { name: 'Rosa', bg: '#FFF1F2', card: '#FFFFFF', text: '#881337', primary: '#FB7185', accent: '#F43F5E' },
        'mint': { name: 'Menta', bg: '#F0FDF4', card: '#FFFFFF', text: '#14532D', primary: '#22C55E', accent: '#86EFAC' },
        'desert': { name: 'Dune', bg: '#78350F', card: '#92400E', text: '#FEF3C7', primary: '#FCD34D', accent: '#F59E0B' },
        'slate': { name: 'Ardesia', bg: '#F8FAFC', card: '#FFFFFF', text: '#0F172A', primary: '#64748B', accent: '#94A3B8' },
        'nebula': { name: 'Nebulosa', bg: '#2E1065', card: '#4C1D95', text: '#F5F3FF', primary: '#A78BFA', accent: '#C084FC' }
    };

    /* --- APP LOGIC --- */
    class App {
        constructor() {
            this.state = {
                theme: 'light',
                glass: false,
                bold: false,
                size: 17,
                cart: [],
                wishlist: [],
                view: 'home',
                promptType: null,
                users: [], // Array di utenti salvati
                currentUser: null // Utente loggato corrente
            };
            this.init();
        }

        init() {
            if(localStorage.getItem('crono_state')) {
                const saved = JSON.parse(localStorage.getItem('crono_state'));
                // Merge saved state but ensure arrays exist
                this.state = { ...this.state, ...saved };
            }
            
            this.applyTheme(this.state.theme);
            this.applyDisplaySettings();
            this.renderProducts();
            this.renderThemes();
            this.updateBadges();
            this.initDraggableChat();
            
            // Check if logged in for settings view
            if(this.state.view === 'settings' && !this.state.currentUser) {
                this.state.view = 'home'; // Fallback to home if not logged in
            }
            this.navigate(this.state.view); // Render current view

            document.getElementById('globalSearchInput').addEventListener('input', (e) => {
                const val = e.target.value.toLowerCase();
                const filtered = products.filter(p => p.nome.toLowerCase().includes(val));
                const target = this.state.view === 'home' ? 'homeGrid' : 'productsGrid';
                this.renderGrid(filtered, target);
            });
        }

        saveState() {
            localStorage.setItem('crono_state', JSON.stringify(this.state));
        }

        /* --- AUTH ENGINE --- */
        openAuth() {
            // Reset UI
            this.resetAuthUI();
            document.getElementById('authDialog').classList.add('open');
        }

        resetAuthUI() {
            document.getElementById('authStep1').style.display = 'block';
            document.getElementById('authStep2').style.display = 'none';
            document.getElementById('authPasswordSection').classList.remove('open');
            document.getElementById('authInputIdentity').value = '';
            document.getElementById('authInputPassword').value = '';
            document.getElementById('authTitle').innerText = 'Accedi';
            document.getElementById('authSubtitle').innerText = 'Usa il tuo account Crono ID per accedere.';
            this.pendingUser = null; // Reset pending user
        }

        handleAuthStep() {
            const identity = document.getElementById('authInputIdentity').value.trim();
            const passField = document.getElementById('authPasswordSection');
            const passInput = document.getElementById('authInputPassword');

            if(!identity) return this.showNotification('Inserisci email o nome utente', 'error');

            // Caso 1: Stiamo già chiedendo la password (il box è aperto)
            if(passField.classList.contains('open')) {
                const password = passInput.value.trim();
                if(!password) return this.showNotification('Inserisci la password', 'error');
                
                // Verifica Login
                const user = this.state.users.find(u => (u.username === identity || u.email === identity) && u.password === password);
                
                if(user) {
                    this.login(user);
                } else {
                    this.showNotification('Password non corretta', 'error');
                }
                return;
            }

            // Caso 2: Primo step (verifica identità)
            const userExists = this.state.users.find(u => u.username === identity || u.email === identity);

            if(userExists) {
                // Utente trovato -> Animazione Password verso il basso
                passField.classList.add('open');
                this.pendingUser = userExists; // Memorizza chi stiamo provando a loggare
            } else {
                // Utente NON trovato -> Overlay Registrazione
                this.showRegistrationOverlay(identity);
            }
        }

        showRegistrationOverlay(prefill) {
            document.getElementById('authStep1').style.display = 'none';
            document.getElementById('authStep2').style.display = 'block';
            document.getElementById('authTitle').innerText = 'Crea ID';
            document.getElementById('authSubtitle').innerText = '';
            
            // Prefill intelligente
            if(prefill.includes('@')) document.getElementById('regEmail').value = prefill;
            else document.getElementById('regUser').value = prefill;
        }

        finalizeRegistration() {
            const username = document.getElementById('regUser').value.trim();
            const email = document.getElementById('regEmail').value.trim();
            const phone = document.getElementById('regPhone').value.trim();
            const pass = document.getElementById('regPass').value.trim();
            const confirm = document.getElementById('regConfirm').value.trim();

            if(!username || !email || !pass) return this.showNotification('Compila i campi obbligatori', 'error');
            if(pass !== confirm) return this.showNotification('Le password non coincidono', 'error');

            const newUser = { username, email, phone, password: pass, avatar: username.charAt(0).toUpperCase() };
            this.state.users.push(newUser);
            this.saveState();
            
            this.showNotification('Account creato!', 'success');
            this.login(newUser);
        }

        login(user) {
            this.state.currentUser = user;
            this.saveState();
            document.getElementById('authDialog').classList.remove('open');
            this.showNotification(`Benvenuto, ${user.username}!`, 'success');
            
            // Aggiorna UI profilo
            this.updateProfileUI();
            
            // Naviga alle impostazioni
            this.navigate('settings');
        }

        logout() {
            this.state.currentUser = null;
            this.saveState();
            this.navigate('home');
            this.showNotification('Disconnesso', 'info');
        }

        updateProfileUI() {
            if(!this.state.currentUser) return;
            const u = this.state.currentUser;
            document.getElementById('userProfileCard').innerHTML = `
                <div class="user-avatar">${u.avatar}</div>
                <div>
                    <div style="font-weight:700; font-size:1.1em;">${u.username}</div>
                    <div style="color:var(--text-sec); font-size:0.9em;">${u.email}</div>
                    <div style="color:var(--text-sec); font-size:0.8em; margin-top:2px;">Crono ID</div>
                </div>
            `;
        }

        /* --- THEME ENGINE (HEX TO RGB) --- */
        hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '0,0,0';
        }

        applyTheme(keyOrObj) {
            let t = typeof keyOrObj === 'string' ? presets[keyOrObj] : keyOrObj;
            if(!t) t = presets['light'];

            const root = document.documentElement.style;
            root.setProperty('--bg-rgb', this.hexToRgb(t.bg));
            root.setProperty('--card-rgb', this.hexToRgb(t.card));
            root.setProperty('--text-rgb', this.hexToRgb(t.text));
            root.setProperty('--primary-rgb', this.hexToRgb(t.primary));
            root.setProperty('--accent-rgb', this.hexToRgb(t.accent || t.primary));

            if (typeof keyOrObj === 'string') this.state.theme = keyOrObj;
            this.saveState();
            this.renderThemes();
        }

        renderThemes() {
            const container = document.getElementById('themeSelector');
            container.innerHTML = Object.entries(presets).map(([k, t]) => `
                <div class="theme-item ${this.state.theme === k ? 'active' : ''}" onclick="app.applyTheme('${k}')">
                    <div class="theme-preview" style="background:${t.bg}; display:flex; justify-content:center; align-items:center;">
                        <div style="width:20px; height:20px; background:${t.primary}; border-radius:50%;"></div>
                    </div>
                    <div class="theme-name">${t.name}</div>
                </div>
            `).join('');
        }

        /* --- DISPLAY SETTINGS --- */
        applyDisplaySettings() {
            const r = document.documentElement.style;
            r.setProperty('--base-size', this.state.size + 'px');
            r.setProperty('--font-weight-normal', this.state.bold ? '600' : '400');
            r.setProperty('--font-weight-bold', this.state.bold ? '800' : '600');
            document.body.classList.toggle('glass-active', this.state.glass);
            
            document.getElementById('glassToggle').checked = this.state.glass;
            document.getElementById('boldToggle').checked = this.state.bold;
        }

        toggleGlass() { this.state.glass = !this.state.glass; this.applyDisplaySettings(); this.saveState(); }
        toggleBold() { this.state.bold = !this.state.bold; this.applyDisplaySettings(); this.saveState(); }
        adjustSize(d) { this.state.size = Math.max(12, Math.min(24, this.state.size + d)); this.applyDisplaySettings(); this.saveState(); }

        /* --- AI FUNCTIONS --- */
        async callGemini(prompt) {
            try {
                const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                    method: 'POST', headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
                });
                const data = await res.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text;
            } catch { return null; }
        }

        async sendChat() {
            const inp = document.getElementById('chatInput'); 
            const txt = inp.value; 
            if(!txt) return;
            
            document.getElementById('chatBody').innerHTML += `<div class="msg-bubble msg-user">${txt}</div>`;
            inp.value = '';
            
            const systemContext = `
                Sei CronoAI, l'assistente di sistema di Cronoshop.
                PUOI ESEGUIRE AZIONI REALI SULL'APP.
                
                Se l'utente chiede di fare qualcosa (es. "cambia tema in scuro", "aggiungi iphone al carrello", "svuota carrello"), 
                DEVI rispondere SOLO con un JSON in questo formato:
                {"action": "set_theme", "value": "dark"}  // value: light, dark, sunset, forest, ocean, cyber
                {"action": "add_cart", "query": "iphone"} // query: nome prodotto da cercare
                {"action": "clear_cart"}
                
                Se l'utente chiede info o consigli, rispondi normalmente in italiano.
            `;

            const res = await this.callGemini(`${systemContext}\nUtente: "${txt}"`);
            
            try {
                const jsonMatch = res.match(/\{.*"action":.*\}/s);
                if(jsonMatch) {
                    const command = JSON.parse(jsonMatch[0]);
                    this.executeCommand(command);
                    document.getElementById('chatBody').innerHTML += `<div class="msg-bubble msg-ai">Fatto! 👍</div>`;
                } else {
                    document.getElementById('chatBody').innerHTML += `<div class="msg-bubble msg-ai">${res}</div>`;
                }
            } catch {
                document.getElementById('chatBody').innerHTML += `<div class="msg-bubble msg-ai">${res}</div>`;
            }
        }

        executeCommand(cmd) {
            if(cmd.action === 'set_theme') {
                if(presets[cmd.value]) this.applyTheme(cmd.value);
                else this.showNotification("Tema non trovato", "error");
            }
            if(cmd.action === 'add_cart') {
                const p = products.find(prod => prod.nome.toLowerCase().includes(cmd.query.toLowerCase()));
                if(p) this.addToCart(p.id);
                else this.showNotification("Prodotto non trovato", "error");
            }
            if(cmd.action === 'clear_cart') {
                this.state.cart = [];
                this.saveState(); this.updateBadges(); this.refreshViews();
                this.showNotification("Carrello svuotato", "info");
            }
        }

        /* --- THEME & VISUAL GENERATORS --- */
        openAiPrompt(type) {
            this.state.promptType = type;
            document.getElementById('aiPromptTitle').innerText = type === 'theme' ? 'Crea un Tema' : 'Ottimizzazione Visiva';
            document.getElementById('aiPromptDesc').innerText = type === 'theme' ? 'Descrivi l\'atmosfera (es. "Tramonto Cyberpunk")' : 'Descrivi le tue esigenze (es. "Fatico a leggere di notte")';
            document.getElementById('aiPromptOverlay').classList.add('open');
        }
        closeAiPrompt() { document.getElementById('aiPromptOverlay').classList.remove('open'); }

        async submitAiPrompt() {
            const txt = document.getElementById('aiPromptInput').value;
            if(!txt) return;
            this.closeAiPrompt();
            this.showNotification("L'AI sta lavorando...", "info");

            if (this.state.promptType === 'theme') {
                const prompt = `Genera un JSON valido (senza markdown) per un tema UI basato su: "${txt}". Keys: bg, card, text, primary, accent. Usa colori HEX.`;
                const res = await this.callGemini(prompt);
                try {
                    const jsonStr = res.replace(/```json|```/g, '').trim();
                    const theme = JSON.parse(jsonStr);
                    this.applyTheme(theme);
                    this.showNotification("Tema Creato!", "success");
                } catch { this.showNotification("Errore creazione tema", "error"); }
            } else {
                const prompt = `Utente dice: "${txt}". Suggerisci JSON valido (senza markdown) per settings UI: size (int 14-22), bold (bool), highContrast (bool).`;
                const res = await this.callGemini(prompt);
                try {
                    const jsonStr = res.replace(/```json|```/g, '').trim();
                    const settings = JSON.parse(jsonStr);
                    this.state.size = settings.size || 17;
                    this.state.bold = settings.bold || false;
                    this.applyDisplaySettings();
                    this.showNotification("Display Ottimizzato!", "success");
                } catch { this.showNotification("Errore ottimizzazione", "error"); }
            }
        }

        /* --- SHOPPING --- */
        addToCart(id) {
            const p = products.find(x=>x.id===id);
            const exist = this.state.cart.find(x=>x.id===id);
            if(exist) exist.qty++; else this.state.cart.push({...p, qty:1});
            this.saveState(); this.updateBadges(); this.showNotification("Aggiunto al carrello", "success");
        }
        
        generateCartMix() {
            if(!this.state.cart.length) return alert('Carrello vuoto!');
            const items = this.state.cart.map(x=>x.nome).join(', ');
            this.callGemini(`Ho nel carrello: ${items}. Dammi un consiglio creativo su come usarli insieme. Max 20 parole.`).then(res => alert(res));
        }

        toggleWishlist(id) {
            const idx = this.state.wishlist.findIndex(x => x.id === id);
            if(idx > -1) {
                this.state.wishlist.splice(idx, 1);
                this.showNotification("Rimosso dai preferiti");
            } else {
                const p = products.find(x => x.id === id);
                if(p) {
                    this.state.wishlist.push(p);
                    this.showNotification("Aggiunto ai preferiti", "success");
                }
            }
            this.saveState();
            this.updateBadges();
            if(this.state.view === 'wishlist') this.renderWishlist();
            this.updateModalHeart(id);
        }

        updateModalHeart(id) {
            const btn = document.getElementById('btnAddToWish');
            if(!btn) return;
            const inWish = this.state.wishlist.some(x => x.id === id);
            const icon = btn.querySelector('i');
            if(inWish) {
                icon.classList.remove('ph'); icon.classList.add('ph-fill');
                icon.style.color = '#FF3B30';
                btn.style.color = '#FF3B30';
            } else {
                icon.classList.remove('ph-fill'); icon.classList.add('ph');
                icon.style.color = 'inherit';
                btn.style.color = 'inherit';
            }
        }

        updateQty(id, delta) {
            const item = this.state.cart.find(x => x.id === id);
            if(item) {
                item.qty = (item.qty || 1) + delta;
                if(item.qty <= 0) this.state.cart = this.state.cart.filter(x => x.id !== id);
                this.saveState();
                this.renderCart(); 
                this.updateBadges();
            }
        }

        updateBadges() { 
            const qty = this.state.cart.reduce((a,b)=>a+(b.qty||1),0);
            document.querySelectorAll('#badge-cart, #header-badge-cart').forEach(e => { e.innerText = qty; e.style.display = qty ? 'block':'none'; });
            
            const wQty = this.state.wishlist.length;
            const wBadge = document.getElementById('badge-wishlist');
            if(wBadge) { wBadge.innerText = wQty; wBadge.style.display = wQty ? 'block':'none'; }
        }

        /* --- NAVIGATION & UI --- */
        navigate(view) {
            // AUTH GUARD PER IMPOSTAZIONI
            if(view === 'settings' && !this.state.currentUser) {
                this.openAuth();
                return;
            }

            document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
            const target = document.getElementById('view-'+view);
            if(target) target.classList.add('active');
            this.state.view = view;
            
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const nav = document.getElementById('nav-'+view); if(nav) nav.classList.add('active');
            
            document.getElementById('pageTitle').innerText = view.charAt(0).toUpperCase() + view.slice(1);
            document.getElementById('sidebar').classList.remove('active');
            document.getElementById('sidebarScrim').classList.remove('active');
            
            if(view === 'cart') this.renderCart();
            if(view === 'wishlist') this.renderWishlist();
            if(view === 'settings') this.updateProfileUI();
        }

        renderProducts() { this.renderGrid(products, 'homeGrid'); this.renderGrid(products, 'productsGrid'); }
        renderGrid(list, target) {
            document.getElementById(target).innerHTML = list.map(p => `
                <div class="product-card" onclick="app.openProductModal('${p.id}')">
                    <div class="product-img-wrap"><img src="${p.img}" class="product-img"></div>
                    <div class="product-details"><div class="product-name">${p.nome}</div><div class="product-price">€${p.prezzo}</div></div>
                </div>`).join('');
        }

        openProductModal(id) {
            const p = products.find(x=>x.id===id);
            if(!p) return;
            this.currentProduct = p;
            document.getElementById('modalTitle').innerText = p.nome;
            document.getElementById('modalPrice').innerText = '€'+p.prezzo;
            document.getElementById('modalDesc').innerText = p.descrizione;
            document.getElementById('aiResponse').style.display = 'none';
            
            document.getElementById('btnAddToCart').onclick = () => { this.addToCart(id); this.closeModal(); };
            
            const wishBtn = document.getElementById('btnAddToWish');
            wishBtn.onclick = () => { this.toggleWishlist(id); };
            this.updateModalHeart(id);
            
            document.getElementById('productDialog').classList.add('open');
        }
        closeModal() { document.getElementById('productDialog').classList.remove('open'); }
        toggleSidebar() { document.getElementById('sidebar').classList.toggle('active'); document.getElementById('sidebarScrim').classList.toggle('active'); }
        
        showNotification(m, t) {
            const d = document.createElement('div');
            d.style.cssText = `position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:${t==='success'?'var(--primary)':(t==='error'?'#FF3B30':'#333')};color:white;padding:12px 24px;border-radius:50px;box-shadow:var(--glass-shadow);z-index:9999;font-weight:600;animation:slideUp 0.3s;font-size:0.9em;`;
            d.innerText = m; document.body.appendChild(d); setTimeout(()=>d.remove(), 2500);
        }

        renderCart() {
            const c = document.getElementById('cartListContainer');
            if(!this.state.cart.length) { c.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-sec);">Vuoto</div>'; document.getElementById('cartSummary').style.display='none'; return; }
            document.getElementById('cartSummary').style.display='block';
            c.innerHTML = this.state.cart.map(i => `
                <div style="display:flex; gap:15px; margin-bottom:15px; background:var(--glass-bg); padding:10px; border-radius:12px; border:1px solid var(--separator); align-items:center;">
                    <img src="${i.img}" style="width:60px; height:60px; object-fit:contain;">
                    <div style="flex:1;"><b>${i.nome}</b><br>€${i.prezzo}</div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <button class="ios-btn btn-secondary" style="width:30px; height:30px; padding:0;" onclick="app.updateQty('${i.id}', -1)">-</button>
                        <span>${i.qty||1}</span>
                        <button class="ios-btn btn-secondary" style="width:30px; height:30px; padding:0;" onclick="app.updateQty('${i.id}', 1)">+</button>
                    </div>
                </div>`).join('');
            document.getElementById('cartTotal').innerText = '€'+this.state.cart.reduce((a,b)=>a+b.prezzo*(b.qty||1),0).toFixed(2);
        }

        renderWishlist() { 
            const container = document.getElementById('wishlistContainer');
            if(this.state.wishlist.length === 0) {
                container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-sec);">Nessun preferito</div>';
            } else {
                container.innerHTML = this.state.wishlist.map(p => `
                    <div class="product-card">
                        <div style="padding:15px; display:flex; align-items:center; gap:15px;">
                            <img src="${p.img}" style="width:60px; height:60px; object-fit:contain;">
                            <div style="flex:1;">
                                <div class="product-name">${p.nome}</div>
                                <div class="product-price">€${p.prezzo}</div>
                            </div>
                            <button class="ios-btn btn-secondary" style="width:auto; padding:8px;" onclick="app.addToCart('${p.id}'); app.toggleWishlist('${p.id}')">🛒</button>
                            <button class="ios-btn btn-secondary" style="width:auto; padding:8px; color:#FF3B30;" onclick="app.toggleWishlist('${p.id}')"><i class="ph-fill ph-trash"></i></button>
                        </div>
                    </div>
                `).join('');
            }
        }

        refreshViews() {
            if(this.state.view === 'cart') this.renderCart();
            if(this.state.view === 'wishlist') this.renderWishlist();
        }

        /* DRAGGABLE CHAT */
        initDraggableChat() {
            const el = document.getElementById('chatOverlay'); const h = document.getElementById('chatHeader');
            let isDown = false, offX, offY;
            h.addEventListener('mousedown', (e) => { isDown = true; offX = el.offsetLeft - e.clientX; offY = el.offsetTop - e.clientY; });
            document.addEventListener('mouseup', () => isDown = false);
            document.addEventListener('mousemove', (e) => {
                if(!isDown) return; e.preventDefault();
                el.style.left = (e.clientX + offX) + 'px'; el.style.top = (e.clientY + offY) + 'px';
                el.style.bottom = 'auto'; el.style.right = 'auto';
            });
        }
        toggleChat() { document.getElementById('chatOverlay').classList.toggle('open'); }
        async askAI() {
            const res = await this.callGemini(`Analizza brevemente il prodotto mostrato. Dammi 3 pro.`);
            const box = document.getElementById('aiResponse'); box.style.display='block'; box.innerHTML = `<b>AI:</b> ${res}`;
        }
    }

    const app = new App();

/* Central editable wedding details. Replace only after checking the original Patrika. */
window.WEDDING_CONFIG = {
  couple: { groom: "Jayesh", bride: "Yojana", groomMr: "जयेश", brideMr: "योजना" },
  weddingDate: "2026-12-14",    // Confirmed date: 14 December 2026
  muhurat: "13:45",            // Confirmed muhurat: 1:45 PM IST
  timezone: "Asia/Kolkata",
  venue: {
    name: "Trived Banquet Hall and Lawns",
    nameMr: "त्रिवेद बँकेट हॉल आणि लॉन्स",
    address: "Turade, Post Rasayani, Taluka Panvel, District Raigad, near Swami Vivekanand Sanstha School, Gulsunde",
    addressMr: "तुराडे, पो. रसयानी, ता. पनवेल, जि. रायगड, स्वामी विवेकानंद संस्था शाळा, गुलसुंदे जवळ"
  },
  families: {
    groomFather: "Mr. Ravindra Atmaram Thakare",
    groomFatherMr: "श्री. रविंद्र आत्माराम ठाकरे",
    groomMother: "Mrs. Lata Ravindra Thakar",
    groomMotherMr: "सौ. लता रविंद्र ठाकरे",
    groomDescription: "Grandson of Late Vimal Atmaram Mahadu Thakare; eldest son of Mr. Ravindra Atmaram Thakare and Mrs. Lata Ravindra Thakar. Native of Samner, currently residing at Bhivpuri Road, Karjat.",
    groomDescriptionMr: "कै. विमल आत्माराम महादू ठाकरे यांचे नातू; श्री. रविंद्र आत्माराम ठाकरे आणि सौ. लता रविंद्र आत्माराम ठाकरे यांचे ज्येष्ठ चिरंजीव; रा. सामनेर, ह.मु. भिवपुरी रोड (कर्जत).",
    brideDescription: "Eldest daughter of the late Mr./Mrs. Pratibha Prafull Atmaram Khawale, resident of Ghatkopar, Mumbai; niece of Mr. Naresh Sitaram Chaudhary.",
    brideDescriptionMr: "कै. श्री./सौ. प्रतिभा प्रफुल्ल आत्माराम खवले, रा. घाटकोपर, मुंबई यांची ज्येष्ठ कन्या; श्री. नरेश सिताराम चौधरी यांची भाची."
  },
  contacts: [
    { name: "Mrs. Lata Ravindra Thakar", nameMr: "सौ. लता रविंद्र ठाकरे", phone: "+919623726402" },
    { name: "Mr. Ravindra Atmaram Thakare", nameMr: "श्री. रविंद्र आत्माराम ठाकरे", phone: "+918983713316" },
    { name: "Mr. Jayesh Ravindra Thakare", nameMr: "श्री. जयेश रविंद्र ठाकरे", phone: "+918805495290" }
  ],
  // Events below are transcribed from the Patrika; calendar durations can be adjusted if desired.
  events: [
    { id: "mehendi", date: "2026-12-12", time: "21:00", durationMinutes: 120, en: "Mehendi Ceremony", mr: "मेहंदी समारंभ", venue: "Rohit Mangal Karyalay, Bhivpuri Road, Karjat", venueMr: "रोहित मंगल कार्यालय, भिवपुरी रोड, कर्जत" },
    { id: "haldi", date: "2026-12-13", time: "17:00", endTime: "23:00", durationMinutes: 360, en: "Haldi Ceremony", mr: "हळदी समारंभ", venue: "Rohit Mangal Karyalay, Bhivpuri Road, Karjat", venueMr: "रोहित मंगल कार्यालय, भिवपुरी रोड, कर्जत" },
    { id: "wedding", date: "2026-12-14", time: "13:45", durationMinutes: 120, en: "Wedding Muhurat", mr: "विवाह मुहूर्त", venue: "Trived Banquet Hall and Lawns, Turade, Rasayani, Panvel, Raigad", venueMr: "त्रिवेद बँकेट हॉल आणि लॉन्स, तुराडे, रसयानी, पनवेल, रायगड" },
    { id: "sneh-bhojan", date: "2026-12-14", time: "13:00", endTime: "15:00", durationMinutes: 120, en: "Sneh Bhojan", mr: "स्नेहभोजन", venue: "Trived Banquet Hall and Lawns, Turade, Rasayani, Panvel, Raigad", venueMr: "त्रिवेद बँकेट हॉल आणि लॉन्स, तुराडे, रसयानी, पनवेल, रायगड" }
  ],
  // Optional music controls: generated locally with Web Audio; no external audio file needed.
  petalsPerMinute: 16
};

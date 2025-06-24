document.addEventListener('DOMContentLoaded', () => {
    // --- Localization (i18n) Logic ---
    const translations = {
        fr: {
            // General elements
            home_link: 'Accueil',
            timers_link: 'Timers d\'Événements',
            guides_link: 'Guides Stratégiques',
            characters_link: 'Personnages',
            about_link: 'À Propos',
            contact_link: 'Contact',
            hero_title: 'Bienvenue sur Le Guide de La Main Noire',
            hero_subtitle: 'Votre ressource ultime pour dominer le jeu et progresser efficacement !',
            hero_cta: 'Découvrir les Guides',
            timers_section_title: '⏱️ Timers d\'Événements',
            timers_loading: 'Chargement des timers...',
            timers_note: '* Tous les horaires sont affichés dans votre fuseau horaire local.',
            guides_section_title: '📚 Guides Stratégiques',
            guide_beginner_title: 'Début de Jeu 🚀',
            beginner_tip1_strong: 'Concentrez-vous sur le QG (Quartier Général) :',
            beginner_tip1_text: 'Améliorez-le dès que possible pour débloquer de nouvelles fonctionnalités et bâtiments. C\'est la clé de votre progression.',
            beginner_tip2_strong: 'Protégez vos ressources :',
            beginner_tip2_text: 'Gardez vos ressources (nourriture, bois, pétrole, métal) sous le seuil de protection de votre entrepôt pour ne pas les perdre en cas d\'attaque.',
            beginner_tip3_strong: 'Ne gaspillez pas vos accélérateurs :',
            beginner_tip3_text: 'Gardez-les pour les constructions et recherches de haut niveau. Utilisez l\'aide de l\'alliance au maximum.',
            beginner_tip4_strong: 'Rejoignez une alliance active :',
            beginner_tip4_text: 'C\'est primordial pour recevoir de l\'aide, participer à des événements, et être protégé.',
            beginner_tip5_strong: 'Montez vos héros d\'exploration :',
            beginner_tip5_text: 'Rusty, Miho, Sarge sont de bons choix pour l\'exploration de la carte et les chasses aux infectés.',
            guide_heroes_title: 'Héros et Compétences 💪',
            heroes_tip1_strong: 'Types de Héros :',
            heroes_tip1_type1_strong: 'Exploration/Combat (Rallye) :',
            heroes_tip1_type1_text: 'Pour les chasses, les rallyes, et les attaques (ex: Rusty, Miho, Sarge).',
            heroes_tip1_type2_strong: 'Développement (Intendance) :',
            heroes_tip1_type2_text: 'Pour les bonus de construction, recherche, production de ressources (ex: Ghost, Travis, Eva).',
            heroes_tip2_strong: 'Focus sur quelques-uns :',
            heroes_tip2_text: 'Au début, concentrez-vous sur 3-5 héros principaux pour l\'exploration et les rallyes. Ne dispersez pas vos ressources.',
            heroes_tip3_strong: 'Éveil des Héros :',
            heroes_tip3_text: 'Collectez des fragments de héros pour les éveiller et débloquer de puissantes compétences.',
            heroes_tip4_strong: 'Formation de Héro :',
            heroes_tip4_text: 'Utilisez la formation pour gagner de l\'expérience et des fragments.',
            guide_resources_title: 'Gestion des Ressources 💰',
            resources_tip1_strong: 'Collecte sur la carte :',
            resources_tip1_text: 'Envoyez vos troupes collecter de la nourriture, du bois, du pétrole, et du métal. Le niveau de la ressource influe sur la quantité.',
            resources_tip2_strong: 'Bâtiments de production :',
            resources_tip2_text: 'Améliorez vos fermes, scieries, raffineries et fonderies. C\'est une production passive mais essentielle.',
            resources_tip3_strong: 'Entrepôt :',
            resources_tip3_text: 'Améliorez votre entrepôt pour augmenter le seuil de protection des ressources.',
            resources_tip4_strong: 'Missions et événements :',
            resources_tip4_text: 'Participez aux événements quotidiens, hebdomadaires et aux missions de l\'histoire pour gagner de grandes quantités de ressources.',
            resources_tip5_strong: 'Utilisation judicieuse :',
            resources_tip5_text: 'Ne produisez pas un surplus de ressources au-delà de ce dont vous avez besoin pour vos prochaines constructions/recherches majeures, surtout si vous n\'êtes pas bien protégé.',
            characters_section_title: '👤 Nos Héros et Personnages',
            character_rusty_name: 'Rusty',
            character_rusty_role: 'Exploration & Combat',
            character_rusty_desc: 'Un héros de combat polyvalent, excellent pour les expéditions et les rallyes contre les infectés. Ses compétences augmentent les dégâts des troupes.',
            character_miho_name: 'Miho',
            character_miho_role: 'Exploration & PvP',
            character_miho_desc: 'Spécialisée dans les attaques à distance et le PvP. Ses compétences améliorent la précision et la puissance de feu de vos unités.',
            character_sarge_name: 'Sarge',
            character_sarge_role: 'Défense & Tank',
            character_sarge_desc: 'Le tank de l\'équipe, excellent pour la défense de votre base. Il réduit les dégâts subis et renforce la durabilité des troupes.',
            character_ghost_name: 'Ghost',
            character_ghost_role: 'Développement & Collecte',
            character_ghost_desc: 'Un héros d\'intendance qui accélère la production de ressources et les constructions. Idéal pour optimiser votre économie.',
            character_travis_name: 'Travis',
            character_travis_role: 'Recherche & Entraînement',
            character_travis_desc: 'Spécialiste de la recherche et de l\'entraînement des troupes. Il réduit les coûts et les temps nécessaires pour les avancées technologiques.',
            character_eva_name: 'Eva',
            character_eva_role: 'Soins & Soutien',
            character_eva_desc: 'Une unité de soutien essentielle qui peut soigner les troupes blessées et améliorer leur survie au combat.',
            view_details_button: 'Voir les détails',
            about_section_title: 'ℹ️ À Propos de Nous',
            about_paragraph1: 'Bienvenue sur Le Guide de La Main Noire, la communauté dédiée aux joueurs cherchant à optimiser leur progression et maîtriser toutes les facettes du jeu. Notre mission est de vous fournir des guides clairs, des astuces à jour et des informations précieuses pour vous aider à devenir un joueur d\'élite.',
            about_paragraph2: 'Que vous soyez un débutant cherchant ses marques ou un vétéran souhaitant affiner ses stratégies, vous trouverez ici les ressources nécessaires pour atteindre vos objectifs. Rejoignez notre communauté et commencez votre ascension vers la victoire !',
            contact_section_title: '📧 Contactez-Nous',
            contact_intro: 'Des questions, des suggestions, ou besoin d\'aide ? N\'hésitez pas à nous contacter !',
            contact_name_placeholder: 'Votre Nom',
            contact_email_placeholder: 'Votre Email',
            contact_message_placeholder: 'Votre Message',
            contact_send_button: 'Envoyer le Message',
            footer_copyright: '&copy; 2025 Le Guide de La Main Noire. Tous droits réservés.',
            search_placeholder: 'Rechercher un guide ou un personnage...'
        },
        en: {
            home_link: 'Home',
            timers_link: 'Event Timers',
            guides_link: 'Strategy Guides',
            characters_link: 'Characters',
            about_link: 'About Us',
            contact_link: 'Contact',
            hero_title: 'Welcome to The Black Hand Guide',
            hero_subtitle: 'Your ultimate resource to dominate the game and progress effectively!',
            hero_cta: 'Discover the Guides',
            timers_section_title: '⏱️ Event Timers',
            timers_loading: 'Loading timers...',
            timers_note: '* All times are displayed in your local timezone.',
            guides_section_title: '📚 Strategy Guides',
            guide_beginner_title: 'Early Game 🚀',
            beginner_tip1_strong: 'Focus on the HQ (Headquarters):',
            beginner_tip1_text: 'Upgrade it as soon as possible to unlock new features and buildings. It\'s key to your progression.',
            beginner_tip2_strong: 'Protect your resources:',
            beginner_tip2_text: 'Keep your resources (food, wood, oil, metal) below your warehouse\'s protection threshold to avoid losing them in case of an attack.',
            beginner_tip3_strong: 'Don\'t waste your speed-ups:',
            beginner_tip3_text: 'Save them for high-level constructions and research. Use alliance help as much as possible.',
            beginner_tip4_strong: 'Join an active alliance:',
            beginner_tip4_text: 'This is crucial for receiving help, participating in events, and being protected.',
            beginner_tip5_strong: 'Level up your exploration heroes:',
            beginner_tip5_text: 'Rusty, Miho, Sarge are good choices for map exploration and infected hunts.',
            guide_heroes_title: 'Heroes and Skills 💪',
            heroes_tip1_strong: 'Hero Types:',
            heroes_tip1_type1_strong: 'Exploration/Combat (Rally):',
            heroes_tip1_type1_text: 'For hunts, rallies, and attacks (e.g., Rusty, Miho, Sarge).',
            heroes_tip1_type2_strong: 'Development (Stewardship):',
            heroes_tip1_type2_text: 'For construction, research, and resource production bonuses (e.g., Ghost, Travis, Eva).',
            heroes_tip2_strong: 'Focus on a few:',
            heroes_tip2_text: 'Initially, focus on 3-5 main heroes for exploration and rallies. Don\'t spread your resources too thin.',
            heroes_tip3_strong: 'Hero Awakening:',
            heroes_tip3_text: 'Collect hero fragments to awaken them and unlock powerful skills.',
            heroes_tip4_strong: 'Hero Training:',
            heroes_tip4_text: 'Use training to gain experience and fragments.',
            guide_resources_title: 'Resource Management 💰',
            resources_tip1_strong: 'Map collection:',
            resources_tip1_text: 'Send your troops to collect food, wood, oil, and metal. The resource level affects the quantity.',
            resources_tip2_strong: 'Production buildings:',
            resources_tip2_text: 'Upgrade your farms, sawmills, refineries, and foundries. This is passive but essential production.',
            resources_tip3_strong: 'Warehouse:',
            resources_tip3_text: 'Upgrade your warehouse to increase the resource protection threshold.',
            resources_tip4_strong: 'Missions and events:',
            resources_tip4_text: 'Participate in daily, weekly events, and story missions to earn large amounts of resources.',
            resources_tip5_strong: 'Judicious use:',
            resources_tip5_text: 'Do not produce a surplus of resources beyond what you need for your next major constructions/research, especially if you are not well protected.',
            characters_section_title: '👤 Our Heroes and Characters',
            character_rusty_name: 'Rusty',
            character_rusty_role: 'Exploration & Combat',
            character_rusty_desc: 'A versatile combat hero, excellent for expeditions and rallies against infected. His skills increase troop damage.',
            character_miho_name: 'Miho',
            character_miho_role: 'Exploration & PvP',
            character_miho_desc: 'Specializing in ranged attacks and PvP. Her skills improve the accuracy and firepower of your units.',
            character_sarge_name: 'Sarge',
            character_sarge_role: 'Defense & Tank',
            character_sarge_desc: 'The team\'s tank, excellent for defending your base. He reduces damage taken and strengthens troop durability.',
            character_ghost_name: 'Ghost',
            character_ghost_role: 'Development & Collection',
            character_ghost_desc: 'A stewardship hero who accelerates resource production and constructions. Ideal for optimizing your economy.',
            character_travis_name: 'Travis',
            character_travis_role: 'Research & Training',
            character_travis_desc: 'A research and troop training specialist. He reduces costs and times for technological advancements.',
            character_eva_name: 'Eva',
            character_eva_role: 'Healing & Support',
            character_eva_desc: 'An essential support unit that can heal wounded troops and improve their survival in combat.',
            view_details_button: 'View details',
            about_section_title: 'ℹ️ About Us',
            about_paragraph1: 'Welcome to The Black Hand Guide, the community dedicated to players looking to optimize their progression and master all aspects of the game. Our mission is to provide you with clear guides, up-to-date tips, and valuable information to help you become an elite player.',
            about_paragraph2: 'Whether you\'re a beginner finding your way or a veteran looking to refine your strategies, you\'ll find the resources needed here to achieve your goals. Join our community and begin your ascent to victory!',
            contact_section_title: '📧 Contact Us',
            contact_intro: 'Questions, suggestions, or need help? Don\'t hesitate to contact us!',
            contact_name_placeholder: 'Your Name',
            contact_email_placeholder: 'Your Email',
            contact_message_placeholder: 'Your Message',
            contact_send_button: 'Send Message',
            footer_copyright: '&copy; 2025 The Black Hand Guide. All rights reserved.',
            search_placeholder: 'Search for a guide or character...'
        },
        ko: { // Korean
            home_link: '홈',
            timers_link: '이벤트 타이머',
            guides_link: '전략 가이드',
            characters_link: '캐릭터',
            about_link: '소개',
            contact_link: '문의',
            hero_title: '블랙 핸드 가이드에 오신 것을 환영합니다',
            hero_subtitle: '게임을 지배하고 효과적으로 진행하기 위한 궁극적인 자료입니다!',
            hero_cta: '가이드 살펴보기',
            timers_section_title: '⏱️ 이벤트 타이머',
            timers_loading: '타이머 로딩 중...',
            timers_note: '* 모든 시간은 현지 시간대로 표시됩니다.',
            guides_section_title: '📚 전략 가이드',
            guide_beginner_title: '초반 게임 🚀',
            beginner_tip1_strong: '본부 (HQ)에 집중하세요:',
            beginner_tip1_text: '새로운 기능과 건물을 잠금 해제하기 위해 가능한 한 빨리 업그레이드하세요. 이것이 진행의 핵심입니다.',
            beginner_tip2_strong: '자원 보호:',
            beginner_tip2_text: '공격 시 손실을 방지하기 위해 창고의 보호 임계값 이하로 자원(음식, 나무, 석유, 금속)을 유지하세요.',
            beginner_tip3_strong: '가속기 낭비 금지:',
            beginner_tip3_text: '고급 건설 및 연구를 위해 아껴두세요. 동맹의 도움을 최대한 활용하세요.',
            beginner_tip4_strong: '활동적인 동맹에 가입하세요:',
            beginner_tip4_text: '도움을 받고 이벤트에 참여하며 보호받는 데 중요합니다.',
            beginner_tip5_strong: '탐색 영웅 레벨업:',
            beginner_tip5_text: 'Rusty, Miho, Sarge는 지도 탐색 및 감염자 사냥에 좋은 선택입니다.',
            guide_heroes_title: '영웅 및 스킬 💪',
            heroes_tip1_strong: '영웅 유형:',
            heroes_tip1_type1_strong: '탐색/전투 (랠리):',
            heroes_tip1_type1_text: '사냥, 랠리 및 공격용 (예: Rusty, Miho, Sarge).',
            heroes_tip1_type2_strong: '개발 (관리):',
            heroes_tip1_type2_text: '건설, 연구, 자원 생산 보너스용 (예: Ghost, Travis, Eva).',
            heroes_tip2_strong: '소수에 집중:',
            heroes_tip2_text: '초반에는 탐색 및 랠리를 위해 3-5명의 주요 영웅에 집중하세요. 자원을 너무 분산시키지 마세요.',
            heroes_tip3_strong: '영웅 각성:',
            heroes_tip3_text: '영웅 조각을 모아 영웅을 각성시키고 강력한 스킬을 잠금 해제하세요.',
            heroes_tip4_strong: '영웅 훈련:',
            heroes_tip4_text: '훈련을 사용하여 경험치와 조각을 얻으세요.',
            guide_resources_title: '자원 관리 💰',
            resources_tip1_strong: '지도 수집:',
            resources_tip1_text: '군대를 보내 음식, 나무, 석유, 금속을 수집하세요. 자원 레벨은 수량에 영향을 미칩니다.',
            resources_tip2_strong: '생산 건물:',
            resources_tip2_text: '농장, 제재소, 정유소 및 주조소를 업그레이드하세요. 이것은 수동적이지만 필수적인 생산입니다.',
            resources_tip3_strong: '창고:',
            resources_tip3_text: '자원 보호 임계값을 높이기 위해 창고를 업그레이드하세요.',
            resources_tip4_strong: '임무 및 이벤트:',
            resources_tip4_text: '일일, 주간 이벤트 및 스토리 임무에 참여하여 많은 양의 자원을 얻으세요.',
            resources_tip5_strong: '현명한 사용:',
            resources_tip5_text: '특히 잘 보호되지 않는 경우, 다음 주요 건설/연구에 필요한 것보다 더 많은 자원을 생산하지 마세요.',
            characters_section_title: '👤 우리의 영웅과 캐릭터',
            character_rusty_name: '러스티',
            character_rusty_role: '탐색 및 전투',
            character_rusty_desc: '탐험과 감염자에 대한 랠리에 탁월한 다재다능한 전투 영웅입니다. 그의 스킬은 병력 피해를 증가시킵니다.',
            character_miho_name: '미호',
            character_miho_role: '탐색 및 PvP',
            character_miho_desc: '원거리 공격 및 PvP에 특화되어 있습니다. 그녀의 스킬은 유닛의 정확도와 화력을 향상시킵니다.',
            character_sarge_name: '사지',
            character_sarge_role: '방어 및 탱커',
            character_sarge_desc: '기지 방어에 탁월한 팀의 탱커입니다. 그는 받는 피해를 줄이고 병력의 내구성을 강화합니다.',
            character_ghost_name: '고스트',
            character_ghost_role: '개발 및 수집',
            character_ghost_desc: '자원 생산 및 건설을 가속화하는 관리 영웅입니다. 경제 최적화에 이상적입니다.',
            character_travis_name: '트래비스',
            character_travis_role: '연구 및 훈련',
            character_travis_desc: '연구 및 병력 훈련 전문가입니다. 그는 기술 발전에 필요한 비용과 시간을 줄입니다.',
            character_eva_name: '에바',
            character_eva_role: '치유 및 지원',
            character_eva_desc: '부상당한 병력을 치유하고 전투에서의 생존을 향상시킬 수 있는 필수 지원 유닛입니다.',
            view_details_button: '세부 정보 보기',
            about_section_title: 'ℹ️ 우리 소개',
            about_paragraph1: '블랙 핸드 가이드에 오신 것을 환영합니다. 이 커뮤니티는 게임 진행을 최적화하고 게임의 모든 측면을 마스터하려는 플레이어를 위해 헌정되었습니다. 우리의 임무는 명확한 가이드, 최신 팁 및 귀중한 정보를 제공하여 엘리트 플레이어가 될 수 있도록 돕는 것입니다.',
            about_paragraph2: '초보자가 길을 찾거나 베테랑이 전략을 개선하려는 경우, 여기에서 목표를 달성하는 데 필요한 자료를 찾을 수 있습니다. 커뮤니티에 가입하여 승리를 향한 등반을 시작하세요!',
            contact_section_title: '📧 문의하기',
            contact_intro: '질문, 제안 또는 도움이 필요하세요? 언제든지 문의하세요!',
            contact_name_placeholder: '당신의 이름',
            contact_email_placeholder: '당신의 이메일',
            contact_message_placeholder: '당신의 메시지',
            contact_send_button: '메시지 보내기',
            footer_copyright: '&copy; 2025 블랙 핸드 가이드. 모든 권리 보유.',
            search_placeholder: '가이드 또는 캐릭터 검색...'
        },
        it: { // Italian
            home_link: 'Home',
            timers_link: 'Timer Eventi',
            guides_link: 'Guide Strategiche',
            characters_link: 'Personaggi',
            about_link: 'Chi Siamo',
            contact_link: 'Contatti',
            hero_title: 'Benvenuti nella Guida della Mano Nera',
            hero_subtitle: 'La tua risorsa definitiva per dominare il gioco e progredire efficacemente!',
            hero_cta: 'Scopri le Guide',
            timers_section_title: '⏱️ Timer Eventi',
            timers_loading: 'Caricamento timer...',
            timers_note: '* Tutti gli orari sono visualizzati nel tuo fuso orario locale.',
            guides_section_title: '📚 Guide Strategiche',
            guide_beginner_title: 'Inizio Gioco 🚀',
            beginner_tip1_strong: 'Concentrati sul QG (Quartier Generale):',
            beginner_tip1_text: 'Aggiornalo il prima possibile per sbloccare nuove funzionalità e edifici. È la chiave della tua progressione.',
            beginner_tip2_strong: 'Proteggi le tue risorse:',
            beginner_tip2_text: 'Mantieni le tue risorse (cibo, legno, petrolio, metallo) al di sotto della soglia di protezione del tuo magazzino per non perderle in caso di attacco.',
            beginner_tip3_strong: 'Non sprecare i tuoi acceleratori:',
            beginner_tip3_text: 'Conservali per costruzioni e ricerche di alto livello. Usa l\'aiuto dell\'alleanza al massimo.',
            beginner_tip4_strong: 'Unisciti a un\'alleanza attiva:',
            beginner_tip4_text: 'È fondamentale per ricevere aiuto, partecipare a eventi ed essere protetto.',
            beginner_tip5_strong: 'Potenzia i tuoi eroi di esplorazione:',
            beginner_tip5_text: 'Rusty, Miho, Sarge sono buone scelte per l\'esplorazione della mappa e la caccia agli infetti.',
            guide_heroes_title: 'Eroi e Abilità 💪',
            heroes_tip1_strong: 'Tipi di Eroi:',
            heroes_tip1_type1_strong: 'Esplorazione/Combattimento (Rally):',
            heroes_tip1_type1_text: 'Per cacce, rally e attacchi (es: Rusty, Miho, Sarge).',
            heroes_tip1_type2_strong: 'Sviluppo (Amministrazione):',
            heroes_tip1_type2_text: 'Per bonus di costruzione, ricerca, produzione di risorse (es: Ghost, Travis, Eva).',
            heroes_tip2_strong: 'Concentrati su alcuni:',
            heroes_tip2_text: 'All\'inizio, concentrati su 3-5 eroi principali per l\'esplorazione e i rally. Non disperdere le tue risorse.',
            heroes_tip3_strong: 'Risveglio degli Eroi:',
            heroes_tip3_text: 'Raccogli frammenti di eroi per risvegliarli e sbloccare potenti abilità.',
            heroes_tip4_strong: 'Formazione Eroe:',
            heroes_tip4_text: 'Usa la formazione per guadagnare esperienza e frammenti.',
            guide_resources_title: 'Gestione delle Risorse 💰',
            resources_tip1_strong: 'Raccolta sulla mappa:',
            resources_tip1_text: 'Invia le tue truppe a raccogliere cibo, legno, petrolio e metallo. Il livello della risorsa influisce sulla quantità.',
            resources_tip2_strong: 'Edifici di produzione:',
            resources_tip2_text: 'Migliora le tue fattorie, segherie, raffinerie e fonderie. È una produzione passiva ma essenziale.',
            resources_tip3_strong: 'Magazzino:',
            resources_tip3_text: 'Migliora il tuo magazzino per aumentare la soglia di protezione delle risorse.',
            resources_tip4_strong: 'Missioni ed eventi:',
            resources_tip4_text: 'Partecipa agli eventi giornalieri, settimanali e alle missioni della storia per guadagnare grandi quantità di risorse.',
            resources_tip5_strong: 'Uso giudizioso:',
            resources_tip5_text: 'Non produrre un surplus di risorse oltre ciò di cui hai bisogno per le tue prossime grandi costruzioni/ricerche, soprattutto se non sei ben protetto.',
            characters_section_title: '👤 I Nostri Eroi e Personaggi',
            character_rusty_name: 'Rusty',
            character_rusty_role: 'Esplorazione e Combattimento',
            character_rusty_desc: 'Un eroe di combattimento versatile, eccellente per spedizioni e rally contro gli infetti. Le sue abilità aumentano il danno delle truppe.',
            character_miho_name: 'Miho',
            character_miho_role: 'Esplorazione e PvP',
            character_miho_desc: 'Specializzata in attacchi a distanza e PvP. Le sue abilità migliorano la precisione e la potenza di fuoco delle tue unità.',
            character_sarge_name: 'Sarge',
            character_sarge_role: 'Difesa e Tank',
            character_sarge_desc: 'Il tank della squadra, eccellente per difendere la tua base. Riduce il danno subito e rafforza la durabilità delle truppe.',
            character_ghost_name: 'Ghost',
            character_ghost_role: 'Sviluppo e Raccolta',
            character_ghost_desc: 'Un eroe di amministrazione che accelera la produzione di risorse e le costruzioni. Ideale per ottimizzare la tua economia.',
            character_travis_name: 'Travis',
            character_travis_role: 'Ricerca e Addestramento',
            character_travis_desc: 'Uno specialista di ricerca e addestramento truppe. Riduce i costi e i tempi necessari per i progressi tecnologici.',
            character_eva_name: 'Eva',
            character_eva_role: 'Cura e Supporto',
            character_eva_desc: 'Un\'unità di supporto essenziale che può curare le truppe ferite e migliorare la loro sopravvivenza in combattimento.',
            view_details_button: 'Vedi dettagli',
            about_section_title: 'ℹ️ Chi Siamo',
            about_paragraph1: 'Benvenuti nella Guida della Mano Nera, la community dedicata ai giocatori che desiderano ottimizzare la loro progressione e padroneggiare ogni aspetto del gioco. La nostra missione è fornirvi guide chiare, suggerimenti aggiornati e informazioni preziose per aiutarvi a diventare un giocatore d\'élite.',
            about_paragraph2: 'Che tu sia un principiante che cerca la sua strada o un veterano che vuole affinare le sue strategie, qui troverai le risorse necessarie per raggiungere i tuoi obiettivi. Unisciti alla nostra community e inizia la tua ascesa verso la vittoria!',
            contact_section_title: '📧 Contattaci',
            contact_intro: 'Domande, suggerimenti o hai bisogno di aiuto? Non esitare a contattarci!',
            contact_name_placeholder: 'Il tuo nome',
            contact_email_placeholder: 'La tua email',
            contact_message_placeholder: 'Il tuo messaggio',
            contact_send_button: 'Invia Messaggio',
            footer_copyright: '&copy; 2025 La Guida della Mano Nera. Tutti i diritti riservati.',
            search_placeholder: 'Cerca una guida o un personaggio...'
        },
        es: { // Spanish
            home_link: 'Inicio',
            timers_link: 'Temporizadores de Eventos',
            guides_link: 'Guías Estratégicas',
            characters_link: 'Personajes',
            about_link: 'Acerca de Nosotros',
            contact_link: 'Contacto',
            hero_title: 'Bienvenido a la Guía de la Mano Negra',
            hero_subtitle: '¡Tu recurso definitivo para dominar el juego y progresar eficazmente!',
            hero_cta: 'Descubrir las Guías',
            timers_section_title: '⏱️ Temporizadores de Eventos',
            timers_loading: 'Cargando temporizadores...',
            timers_note: '* Todos los horarios se muestran en tu zona horaria local.',
            guides_section_title: '📚 Guías Estratégicas',
            guide_beginner_title: 'Inicio del Juego 🚀',
            beginner_tip1_strong: 'Concéntrate en el CG (Cuartel General):',
            beginner_tip1_text: 'Mejóralo lo antes posible para desbloquear nuevas funcionalidades y edificios. Es la clave de tu progresión.',
            beginner_tip2_strong: 'Protege tus recursos:',
            beginner_tip2_text: 'Mantén tus recursos (alimento, madera, petróleo, metal) por debajo del umbral de protección de tu almacén para no perderlos en caso de ataque.',
            beginner_tip3_strong: 'No desperdicies tus aceleradores:',
            beginner_tip3_text: 'Guárdalos para construcciones e investigaciones de alto nivel. Utiliza la ayuda de la alianza al máximo.',
            beginner_tip4_strong: 'Únete a una alianza activa:',
            beginner_tip4_text: 'Es primordial para recibir ayuda, participar en eventos y estar protegido.',
            beginner_tip5_strong: 'Sube de nivel a tus héroes de exploración:',
            beginner_tip5_text: 'Rusty, Miho, Sarge son buenas opciones para la exploración del mapa y las cacerías de infectados.',
            guide_heroes_title: 'Héroes y Habilidades 💪',
            heroes_tip1_strong: 'Tipos de Héroes:',
            heroes_tip1_type1_strong: 'Exploración/Combate (Reunión):',
            heroes_tip1_type1_text: 'Para cacerías, reuniones y ataques (ej: Rusty, Miho, Sarge).',
            heroes_tip1_type2_strong: 'Desarrollo (Administración):',
            heroes_tip1_type2_text: 'Para bonificaciones de construcción, investigación, producción de recursos (ej: Ghost, Travis, Eva).',
            heroes_tip2_strong: 'Concéntrate en unos pocos:',
            heroes_tip2_text: 'Al principio, concéntrate en 3-5 héroes principales para la exploración y las reuniones. No disperses tus recursos.',
            heroes_tip3_strong: 'Despertar de Héroes:',
            heroes_tip3_text: 'Recolecta fragmentos de héroes para despertarlos y desbloquear poderosas habilidades.',
            heroes_tip4_strong: 'Formación de Héroes:',
            heroes_tip4_text: 'Usa la formación para ganar experiencia y fragmentos.',
            guide_resources_title: 'Gestión de Recursos 💰',
            resources_tip1_strong: 'Recolección en el mapa:',
            resources_tip1_text: 'Envía a tus tropas a recolectar alimento, madera, petróleo y metal. El nivel del recurso influye en la cantidad.',
            resources_tip2_strong: 'Edificios de producción:',
            resources_tip2_text: 'Mejora tus granjas, aserraderos, refinerías y fundiciones. Es una producción pasiva pero esencial.',
            resources_tip3_strong: 'Almacén:',
            resources_tip3_text: 'Mejora tu almacén para aumentar el umbral de protección de los recursos.',
            resources_tip4_strong: 'Misiones y eventos:',
            resources_tip4_text: 'Participa en los eventos diarios, semanales y en las misiones de la historia para ganar grandes cantidades de recursos.',
            resources_tip5_strong: 'Uso inteligente:',
            resources_tip5_text: 'No produzcas un excedente de recursos más allá de lo que necesitas para tus próximas construcciones/investigaciones importantes, especialmente si no estás bien protegido.',
            characters_section_title: '👤 Nuestros Héroes y Personajes',
            character_rusty_name: 'Rusty',
            character_rusty_role: 'Exploración y Combate',
            character_rusty_desc: 'Un héroe de combate versátil, excelente para expediciones y rallies contra infectados. Sus habilidades aumentan el daño de las tropas.',
            character_miho_name: 'Miho',
            character_miho_role: 'Exploración y PvP',
            character_miho_desc: 'Especializada en ataques a distancia y PvP. Sus habilidades mejoran la precisión y la potencia de fuego de tus unidades.',
            character_sarge_name: 'Sarge',
            character_sarge_role: 'Defensa y Tanque',
            character_sarge_desc: 'El tanque del equipo, excelente para defender tu base. Reduce el daño recibido y fortalece la durabilidad de las tropas.',
            character_ghost_name: 'Ghost',
            character_ghost_role: 'Desarrollo y Recolección',
            character_ghost_desc: 'Un héroe de intendencia que acelera la producción de recursos y las construcciones. Ideal para optimizar tu economía.',
            character_travis_name: 'Travis',
            character_travis_role: 'Investigación y Entrenamiento',
            character_travis_desc: 'Especialista en investigación y entrenamiento de tropas. Reduce los costos y los tiempos necesarios para los avances tecnológicos.',
            character_eva_name: 'Eva',
            character_eva_role: 'Curación y Apoyo',
            character_eva_desc: 'Una unidad de apoyo esencial que puede curar tropas heridas y mejorar su supervivencia en combate.',
            view_details_button: 'Ver detalles',
            about_section_title: 'ℹ️ Acerca de Nosotros',
            about_paragraph1: 'Bienvenido a la Guía de la Mano Negra, la comunidad dedicada a los jugadores que buscan optimizar su progresión y dominar todas las facetas del juego. Nuestra misión es proporcionarte guías claras, consejos actualizados e información valiosa para ayudarte a convertirte en un jugador de élite.',
            about_paragraph2: 'Tanto si eres un principiante que busca su camino como un veterano que desea refinar sus estrategias, aquí encontrarás los recursos necesarios para lograr tus objetivos. ¡Únete a nuestra comunidad y comienza tu ascenso hacia la victoria!',
            contact_section_title: '📧 Contáctanos',
            contact_intro: '¿Preguntas, sugerencias o necesitas ayuda? ¡No dudes en contactarnos!',
            contact_name_placeholder: 'Tu Nombre',
            contact_email_placeholder: 'Tu Correo Electrónico',
            contact_message_placeholder: 'Tu Mensaje',
            contact_send_button: 'Enviar Mensaje',
            footer_copyright: '&copy; 2025 La Guía de la Mano Negra. Todos los derechos reservados.',
            search_placeholder: 'Buscar una guía o personaje...'
        },
        ru: { // Russian
            home_link: 'Главная',
            timers_link: 'Таймеры событий',
            guides_link: 'Стратегические руководства',
            characters_link: 'Персонажи',
            about_link: 'О нас',
            contact_link: 'Контакты',
            hero_title: 'Добро пожаловать в Руководство Черной Руки',
            hero_subtitle: 'Ваш главный ресурс для доминирования в игре и эффективного прогресса!',
            hero_cta: 'Изучить руководства',
            timers_section_title: '⏱️ Таймеры событий',
            timers_loading: 'Загрузка таймеров...',
            timers_note: '* Все время указано по вашему местному часовому поясу.',
            guides_section_title: '📚 Стратегические руководства',
            guide_beginner_title: 'Начало игры 🚀',
            beginner_tip1_strong: 'Сосредоточьтесь на штабе (Штабе):',
            beginner_tip1_text: 'Улучшайте его как можно скорее, чтобы разблокировать новые функции и здания. Это ключ к вашему прогрессу.',
            beginner_tip2_strong: 'Защищайте свои ресурсы:',
            beginner_tip2_text: 'Держите свои ресурсы (еду, дерево, нефть, металл) ниже порога защиты вашего склада, чтобы не потерять их в случае нападения.',
            beginner_tip3_strong: 'Не тратьте свои ускорители:',
            beginner_tip3_text: 'Сохраните их для высокоуровневого строительства и исследований. Используйте помощь альянса по максимуму.',
            beginner_tip4_strong: 'Присоединитесь к активному альянсу:',
            beginner_tip4_text: 'Это крайне важно для получения помощи, участия в событиях и защиты.',
            beginner_tip5_strong: 'Прокачивайте своих героев разведки:',
            beginner_tip5_text: 'Расти, Михо, Сержант — хороший выбор для исследования карты и охоты на зараженных.',
            guide_heroes_title: 'Герои и навыки 💪',
            heroes_tip1_strong: 'Типы героев:',
            heroes_tip1_type1_strong: 'Разведка/Бой (Ралли):',
            heroes_tip1_type1_text: 'Для охоты, ралли и атак (например: Расти, Михо, Сержант).',
            heroes_tip1_type2_strong: 'Развитие (Управление):',
            heroes_tip1_type2_text: 'Для бонусов к строительству, исследованиям, производству ресурсов (например: Призрак, Трэвис, Ева).',
            heroes_tip2_strong: 'Сосредоточьтесь на нескольких:',
            heroes_tip2_text: 'Вначале сосредоточьтесь на 3-5 основных героях для разведки и ралли. Не распыляйте свои ресурсы.',
            heroes_tip3_strong: 'Пробуждение героев:',
            heroes_tip3_text: 'Собирайте фрагменты героев, чтобы пробуждать их и разблокировать мощные навыки.',
            heroes_tip4_strong: 'Обучение героев:',
            heroes_tip4_text: 'Используйте обучение для получения опыта и фрагментов.',
            guide_resources_title: 'Управление ресурсами 💰',
            resources_tip1_strong: 'Сбор на карте:',
            resources_tip1_text: 'Отправляйте свои войска собирать еду, дерево, нефть и металл. Уровень ресурса влияет на количество.',
            resources_tip2_strong: 'Производственные здания:',
            resources_tip2_text: 'Улучшайте свои фермы, лесопилки, нефтеперерабатывающие заводы и литейные цеха. Это пассивное, но необходимое производство.',
            resources_tip3_strong: 'Склад:',
            resources_tip3_text: 'Улучшайте свой склад, чтобы увеличить порог защиты ресурсов.',
            resources_tip4_strong: 'Миссии и события:',
            resources_tip4_text: 'Участвуйте в ежедневных, еженедельных событиях и сюжетных миссиях, чтобы получить большое количество ресурсов.',
            resources_tip5_strong: 'Разумное использование:',
            resources_tip5_text: 'Не производите избыток ресурсов сверх того, что вам нужно для следующих крупных строек/исследований, особенно если вы плохо защищены.',
            characters_section_title: '👤 Наши герои и персонажи',
            character_rusty_name: 'Расти',
            character_rusty_role: 'Разведка и Бой',
            character_rusty_desc: 'Универсальный боевой герой, отлично подходящий для экспедиций и сборов против зараженных. Его навыки увеличивают урон войск.',
            character_miho_name: 'Михо',
            character_miho_role: 'Разведка и PvP',
            character_miho_desc: 'Специализируется на дальних атаках и PvP. Ее навыки улучшают точность и огневую мощь ваших юнитов.',
            character_sarge_name: 'Сержант',
            character_sarge_role: 'Защита и Танк',
            character_sarge_desc: 'Танк команды, отлично подходит для защиты вашей базы. Он снижает получаемый урон и укрепляет выносливость войск.',
            character_ghost_name: 'Призрак',
            character_ghost_role: 'Развитие и Сбор',
            character_ghost_desc: 'Герой управления, который ускоряет производство ресурсов и строительство. Идеально подходит для оптимизации вашей экономики.',
            character_travis_name: 'Трэвис',
            character_travis_role: 'Исследование и Обучение',
            character_travis_desc: 'Специалист по исследованиям и обучению войск. Он снижает затраты и время, необходимые для технологических достижений.',
            character_eva_name: 'Ева',
            character_eva_role: 'Исцеление и Поддержка',
            character_eva_desc: 'Незаменимая единица поддержки, которая может лечить раненых солдат и повышать их выживаемость в бою.',
            view_details_button: 'Посмотреть детали',
            about_section_title: 'ℹ️ О нас',
            about_paragraph1: 'Добро пожаловать в Руководство Черной Руки, сообщество, посвященное игрокам, стремящимся оптимизировать свой прогресс и освоить все аспекты игры. Наша миссия — предоставить вам четкие руководства, актуальные советы и ценную информацию, чтобы помочь вам стать элитным игроком.',
            about_paragraph2: 'Независимо от того, являетесь ли вы новичком, ищущим свой путь, или ветераном, желающим улучшить свои стратегии, здесь вы найдете необходимые ресурсы для достижения своих целей. Присоединяйтесь к нашему сообществу и начните свое восхождение к победе!',
            contact_section_title: '📧 Связаться с нами',
            contact_intro: 'Вопросы, предложения или нужна помощь? Не стесняйтесь обращаться к нам!',
            contact_name_placeholder: 'Ваше имя',
            contact_email_placeholder: 'Ваш адрес электронной почты',
            contact_message_placeholder: 'Ваше сообщение',
            contact_send_button: 'Отправить сообщение',
            footer_copyright: '&copy; 2025 Руководство Черной Руки. Все права защищены.',
            search_placeholder: 'Поиск руководства или персонажа...'
        },
        zh: { // Chinese
            home_link: '主页',
            timers_link: '活动计时器',
            guides_link: '策略指南',
            characters_link: '角色',
            about_link: '关于我们',
            contact_link: '联系我们',
            hero_title: '欢迎来到黑手指南',
            hero_subtitle: '您称霸游戏并有效进步的终极资源！',
            hero_cta: '发现指南',
            timers_section_title: '⏱️ 活动计时器',
            timers_loading: '正在加载计时器...',
            timers_note: '* 所有时间均以您当地时区显示。',
            guides_section_title: '📚 策略指南',
            guide_beginner_title: '游戏初期 🚀',
            beginner_tip1_strong: '专注于指挥部 (HQ)：',
            beginner_tip1_text: '尽快升级它以解锁新功能和建筑。这是您进步的关键。',
            beginner_tip2_strong: '保护您的资源：',
            beginner_tip2_text: '将您的资源（食物、木材、石油、金属）保持在仓库保护阈值以下，以避免在受到攻击时丢失它们。',
            beginner_tip3_strong: '不要浪费您的加速道具：',
            beginner_tip3_text: '将它们留给高级建筑和研究。最大限度地利用联盟帮助。',
            beginner_tip4_strong: '加入活跃的联盟：',
            beginner_tip4_text: '这对于获得帮助、参与活动和受到保护至关重要。',
            beginner_tip5_strong: '升级您的探索英雄：',
            beginner_tip5_text: 'Rusty、Miho、Sarge 是地图探索和感染者狩猎的好选择。',
            guide_heroes_title: '英雄与技能 💪',
            heroes_tip1_strong: '英雄类型：',
            heroes_tip1_type1_strong: '探索/战斗 (集结)：',
            heroes_tip1_type1_text: '用于狩猎、集结和攻击（例如：Rusty、Miho、Sarge）。',
            heroes_tip1_type2_strong: '发展 (内政)：',
            heroes_tip1_type2_text: '用于建筑、研究和资源生产奖励（例如：Ghost、Travis、Eva）。',
            heroes_tip2_strong: '专注于少数几个：',
            heroes_tip2_text: '最初，专注于 3-5 个主要英雄进行探索和集结。不要分散您的资源。',
            heroes_tip3_strong: '英雄觉醒：',
            heroes_tip3_text: '收集英雄碎片以觉醒他们并解锁强大的技能。',
            heroes_tip4_strong: '英雄训练：',
            heroes_tip4_text: '使用训练来获得经验和碎片。',
            guide_resources_title: '资源管理 💰',
            resources_tip1_strong: '地图收集：',
            resources_tip1_text: '派遣您的部队收集食物、木材、石油和金属。资源等级会影响数量。',
            resources_tip2_strong: '生产建筑：',
            resources_tip2_text: '升级您的农场、伐木场、炼油厂和铸造厂。这是被动但必不可少的生产。',
            resources_tip3_strong: '仓库：',
            resources_tip3_text: '升级您的仓库以增加资源保护阈值。',
            resources_tip4_strong: '任务和活动：',
            resources_tip4_text: '参与每日、每周活动和故事任务以获得大量资源。',
            resources_tip5_strong: '明智使用：',
            resources_tip5_text: '不要生产超出您下次主要建筑/研究所需的过剩资源，特别是如果您没有受到良好保护。',
            characters_section_title: '👤 我们的英雄和角色',
            character_rusty_name: '拉丝蒂',
            character_rusty_role: '探索与战斗',
            character_rusty_desc: '一位多功能的战斗英雄，非常适合远征和对抗感染者的集结。他的技能会增加部队伤害。',
            character_miho_name: '美穗',
            character_miho_role: '探索与PvP',
            character_miho_desc: '擅长远程攻击和PvP。她的技能提高了您部队的准确性和火力。',
            character_sarge_name: '中士',
            character_sarge_role: '防御与坦克',
            character_sarge_desc: '团队的坦克，非常适合防御您的基地。他减少受到的伤害并增强部队的耐久性。',
            character_ghost_name: '幽灵',
            character_ghost_role: '发展与收集',
            character_ghost_desc: '一位内政英雄，可以加速资源生产和建筑建造。非常适合优化您的经济。',
            character_travis_name: '特拉维斯',
            character_travis_role: '研究与训练',
            character_travis_desc: '一位研究和部队训练专家。他减少了技术进步所需的成本和时间。',
            character_eva_name: '伊娃',
            character_eva_role: '治疗与支援',
            character_eva_desc: '一个重要的支援单位，可以治疗受伤的部队并提高他们在战斗中的生存能力。',
            view_details_button: '查看详情',
            about_section_title: 'ℹ️ 关于我们',
            about_paragraph1: '欢迎来到黑手指南，这是一个致力于帮助玩家优化游戏进程并掌握游戏各个方面的社区。我们的使命是为您提供清晰的指南、最新的提示和宝贵的信息，以帮助您成为一名精英玩家。',
            about_paragraph2: '无论您是初出茅庐的新手还是希望完善策略的老玩家，您都可以在这里找到实现目标所需的资源。加入我们的社区，开始您的胜利之路吧！',
            contact_section_title: '📧 联系我们',
            contact_intro: '有问题、建议或需要帮助？请随时联系我们！',
            contact_name_placeholder: '您的姓名',
            contact_email_placeholder: '您的电子邮件',
            contact_message_placeholder: '您的留言',
            contact_send_button: '发送消息',
            footer_copyright: '&copy; 2025 黑手指南。版权所有。',
            search_placeholder: '搜索指南或角色...'
        },
        ja: { // Japanese
            home_link: 'ホーム',
            timers_link: 'イベントタイマー',
            guides_link: '戦略ガイド',
            characters_link: 'キャラクター',
            about_link: '私たちについて',
            contact_link: 'お問い合わせ',
            hero_title: 'ブラックハンドガイドへようこそ',
            hero_subtitle: 'ゲームを支配し、効率的に進むための究極のリソース！',
            hero_cta: 'ガイドを見る',
            timers_section_title: '⏱️ イベントタイマー',
            timers_loading: 'タイマーを読み込み中...',
            timers_note: '* すべての時間は現地時間で表示されます。',
            guides_section_title: '📚 戦略ガイド',
            guide_beginner_title: 'ゲーム序盤 🚀',
            beginner_tip1_strong: 'HQ（本部）に集中する：',
            beginner_tip1_text: '新しい機能や建物をアンロックするために、できるだけ早くアップグレードしてください。それが進行の鍵です。',
            beginner_tip2_strong: '資源を保護する：',
            beginner_tip2_text: '攻撃された場合に資源を失わないよう、倉庫の保護しきい値以下に資源（食料、木材、石油、金属）を保ってください。',
            beginner_tip3_strong: '加速アイテムを無駄にしない：',
            beginner_tip3_text: '高レベルの建設や研究のために温存してください。同盟の助けを最大限に活用してください。',
            beginner_tip4_strong: '活発な同盟に参加する：',
            beginner_tip4_text: '援助を受け、イベントに参加し、保護されるために不可欠です。',
            beginner_tip5_strong: '探索ヒーローを育成する：',
            beginner_tip5_text: 'Rusty、Miho、Sargeはマップ探索や感染者狩りに適しています。',
            guide_heroes_title: 'ヒーローとスキル 💪',
            heroes_tip1_strong: 'ヒーローの種類：',
            heroes_tip1_type1_strong: '探索/戦闘（ラリー）：',
            heroes_tip1_type1_text: '狩り、ラリー、攻撃用（例：Rusty、Miho、Sarge）。',
            heroes_tip1_type2_strong: '開発（内政）：',
            heroes_tip1_type2_text: '建設、研究、資源生産ボーナス用（例：Ghost、Travis、Eva）。',
            heroes_tip2_strong: '少数に集中する：',
            heroes_tip2_text: '最初は探索とラリーのために3〜5人の主要なヒーローに集中してください。資源を分散させすぎないでください。',
            heroes_tip3_strong: 'ヒーローの覚醒：',
            heroes_tip3_text: 'ヒーローの破片を集めて覚醒させ、強力なスキルをアンロックしてください。',
            heroes_tip4_strong: 'ヒーロー訓練：',
            heroes_tip4_text: '訓練を使用して経験値と破片を獲得してください。',
            guide_resources_title: '資源管理 💰',
            resources_tip1_strong: 'マップでの採集：',
            resources_tip1_text: '部隊を派遣して食料、木材、石油、金属を採集してください。資源のレベルが量に影響します。',
            resources_tip2_strong: '生産施設：',
            resources_tip2_text: '農場、製材所、製油所、鋳造所をアップグレードしてください。これは受動的ですが不可欠な生産です。',
            resources_tip3_strong: '倉庫：',
            resources_tip3_text: '倉庫をアップグレードして資源の保護しきい値を上げてください。',
            resources_tip4_strong: 'ミッションとイベント：',
            resources_tip4_text: '毎日、毎週のイベントやストーリーミッションに参加して大量の資源を獲得してください。',
            resources_tip5_strong: '賢い使用法：',
            resources_tip5_text: '特に十分に保護されていない場合、次の主要な建設/研究に必要な量を超えて資源を生産しないでください。',
            characters_section_title: '👤 私たちのヒーローとキャラクター',
            character_rusty_name: 'ラスティ',
            character_rusty_role: '探索＆戦闘',
            character_rusty_desc: '遠征や感染者に対するラリーに優れた多才な戦闘ヒーロー。彼のスキルは部隊のダメージを増加させます。',
            character_miho_name: 'ミホ',
            character_miho_role: '探索＆PvP',
            character_miho_desc: '遠隔攻撃とPvPに特化しています。彼女のスキルはユニットの精度と火力を向上させます。',
            character_sarge_name: 'サージ',
            character_sarge_role: '防御＆タンク',
            character_sarge_desc: '基地防衛に優れたチームのタンク。彼は受けるダメージを軽減し、部隊の耐久性を強化します。',
            character_ghost_name: 'ゴースト',
            character_ghost_role: '開発＆収集',
            character_ghost_desc: '資源生産と建設を加速する内政ヒーロー。経済を最適化するのに理想的です。',
            character_travis_name: 'トラヴィス',
            character_travis_role: '研究＆訓練',
            character_travis_desc: '研究と部隊訓練の専門家。彼は技術進歩に必要なコストと時間を削減します。',
            character_eva_name: 'エヴァ',
            character_eva_role: '回復＆サポート',
            character_eva_desc: '負傷した部隊を回復させ、戦闘での生存率を向上させることができる不可欠なサポートユニット。',
            view_details_button: '詳細を見る',
            about_section_title: 'ℹ️ 私たちについて',
            about_paragraph1: 'ブラックハンドガイドへようこそ。このコミュニティは、ゲームの進行を最適化し、ゲームのあらゆる側面をマスターしようとしているプレイヤーに捧げられています。私たちの使命は、明確なガイド、最新のヒント、貴重な情報を提供し、あなたがエリートプレイヤーになるのを支援することです。',
            about_paragraph2: '初心者で進むべき道を探している人も、ベテランで戦略を磨きたい人も、ここで目標達成に必要なリソースを見つけることができます。私たちのコミュニティに参加して、勝利への道を歩み始めましょう！',
            contact_section_title: '📧 お問い合わせ',
            contact_intro: '質問、提案、または助けが必要ですか？お気軽にお問い合わせください！',
            contact_name_placeholder: 'お名前',
            contact_email_placeholder: 'あなたのメールアドレス',
            contact_message_placeholder: 'あなたのメッセージ',
            contact_send_button: 'メッセージを送信',
            footer_copyright: '&copy; 2025 ブラックハンドガイド. 無断複写・転載を禁じます。',
            search_placeholder: 'ガイドまたはキャラクターを検索...'
        },
        el: { // Greek
            home_link: 'Αρχική',
            timers_link: 'Χρονοδιακόπτες Εκδηλώσεων',
            guides_link: 'Στρατηγικοί Οδηγοί',
            characters_link: 'Χαρακτήρες',
            about_link: 'Σχετικά με εμάς',
            contact_link: 'Επικοινωνία',
            hero_title: 'Καλώς ήρθατε στον Οδηγό της Μαύρης Χειρός',
            hero_subtitle: 'Ο απόλυτος πόρος σας για να κυριαρχήσετε στο παιχνίδι και να προχωρήσετε αποτελεσματικά!',
            hero_cta: 'Ανακαλύψτε τους Οδηγούς',
            timers_section_title: '⏱️ Χρονοδιακόπτες Εκδηλώσεων',
            timers_loading: 'Φόρτωση χρονοδιακόπτων...',
            timers_note: '* Όλες οι ώρες εμφανίζονται στην τοπική σας ζώνη ώρας.',
            guides_section_title: '📚 Στρατηγικοί Οδηγοί',
            guide_beginner_title: 'Αρχικό Παιχνίδι 🚀',
            beginner_tip1_strong: 'Επικεντρωθείτε στο HQ (Αρχηγείο):',
            beginner_tip1_text: 'Αναβαθμίστε το το συντομότερο δυνατό για να ξεκλειδώσετε νέες λειτουργίες και κτίρια. Είναι το κλειδί για την πρόοδό σας.',
            beginner_tip2_strong: 'Προστατέψτε τους πόρους σας:',
            beginner_tip2_text: 'Κρατήστε τους πόρους σας (τροφή, ξύλο, πετρέλαιο, μέταλλο) κάτω από το όριο προστασίας της αποθήκης σας για να μην τους χάσετε σε περίπτωση επίθεσης.',
            beginner_tip3_strong: 'Μην σπαταλάτε τις επιταχύνσεις σας:',
            beginner_tip3_text: 'Φυλάξτε τις για κατασκευές και έρευνες υψηλού επιπέδου. Χρησιμοποιήστε τη βοήθεια της συμμαχίας στο μέγιστο.',
            beginner_tip4_strong: 'Συμμετάσχετε σε ενεργή συμμαχία:',
            beginner_tip4_text: 'Αυτό είναι ζωτικής σημασίας για να λάβετε βοήθεια, να συμμετάσχετε σε εκδηλώσεις και να προστατευτείτε.',
            beginner_tip5_strong: 'Αναβαθμίστε τους ήρωες εξερεύνησής σας:',
            beginner_tip5_text: 'Οι Rusty, Miho, Sarge είναι καλές επιλογές για εξερεύνηση χάρτη και κυνήγι μολυσμένων.',
            guide_heroes_title: 'Ήρωες και Δεξιότητες 💪',
            heroes_tip1_strong: 'Τύποι Ηρώων:',
            heroes_tip1_type1_strong: 'Εξερεύνηση/Μάχη (Συγκέντρωση):',
            heroes_tip1_type1_text: 'Για κυνήγι, συγκεντρώσεις και επιθέσεις (π.χ.: Rusty, Miho, Sarge).',
            heroes_tip1_type2_strong: 'Ανάπτυξη (Διαχείριση):',
            heroes_tip1_type2_text: 'Για μπόνους κατασκευής, έρευνας, παραγωγής πόρων (π.χ.: Ghost, Travis, Eva).',
            heroes_tip2_strong: 'Επικεντρωθείτε σε λίγους:',
            heroes_tip2_text: 'Αρχικά, επικεντρωθείτε σε 3-5 κύριους ήρωες για εξερεύνηση και συγκεντρώσεις. Μην διασκορπίζετε τους πόρους σας.',
            heroes_tip3_strong: 'Αφύπνιση Ηρώων:',
            heroes_tip3_text: 'Συλλέξτε κομμάτια ηρώων για να τους αφυπνίσετε και να ξεκλειδώσετε ισχυρές δεξιότητες.',
            heroes_tip4_strong: 'Εκπαίδευση Ηρώων:',
            heroes_tip4_text: 'Χρησιμοποιήστε την εκπαίδευση για να κερδίσετε εμπειρία και κομμάτια.',
            guide_resources_title: 'Διαχείριση Πόρων 💰',
            resources_tip1_strong: 'Συλλογή στον χάρτη:',
            resources_tip1_text: 'Στείλτε τα στρατεύματά σας να συλλέξουν τροφή, ξύλο, πετρέλαιο και μέταλλο. Το επίπεδο του πόρου επηρεάζει την ποσότητα.',
            resources_tip2_strong: 'Κτίρια παραγωγής:',
            resources_tip2_text: 'Αναβαθμίστε τις φάρμες, τα πριονιστήρια, τα διυλιστήρια και τα χυτήρια σας. Αυτή είναι μια παθητική αλλά απαραίτητη παραγωγή.',
            resources_tip3_strong: 'Αποθήκη:',
            resources_tip3_text: 'Αναβαθμίστε την αποθήκη σας για να αυξήσετε το όριο προστασίας των πόρων.',
            resources_tip4_strong: 'Αποστολές και εκδηλώσεις:',
            resources_tip4_text: 'Συμμετάσχετε σε καθημερινές, εβδομαδιαίες εκδηλώσεις και σε αποστολές ιστορίας για να κερδίσετε μεγάλες ποσότητες πόρων.',
            resources_tip5_strong: 'Σοφή χρήση:',
            resources_tip5_text: 'Μην παράγετε πλεόνασμα πόρων πέρα ​​από αυτό που χρειάζεστε για τις επόμενες μεγάλες κατασκευές/έρευνές σας, ειδικά αν δεν είστε καλά προστατευμένοι.',
            characters_section_title: '👤 Οι Ήρωες και οι Χαρακτήρες μας',
            character_rusty_name: 'Ράστι',
            character_rusty_role: 'Εξερεύνηση & Μάχη',
            character_rusty_desc: 'Ένας ευέλικτος ήρωας μάχης, εξαιρετικός για αποστολές και συγκεντρώσεις ενάντια σε μολυσμένους. Οι δεξιότητές του αυξάνουν τη ζημιά των στρατευμάτων.',
            character_miho_name: 'Μίχο',
            character_miho_role: 'Εξερεύνηση & PvP',
            character_miho_desc: 'Εξειδικεύεται σε επιθέσεις εμβέλειας και PvP. Οι δεξιότητές της βελτιώνουν την ακρίβεια και τη δύναμη πυρός των μονάδων σας.',
            character_sarge_name: 'Σερζ',
            character_sarge_role: 'Άμυνα & Tank',
            character_sarge_desc: 'Το tank της ομάδας, εξαιρετικός για την υπεράσπιση της βάσης σας. Μειώνει τη ζημιά που δέχεται και ενισχύει την αντοχή των στρατευμάτων.',
            character_ghost_name: 'Φάντασμα',
            character_ghost_role: 'Ανάπτυξη & Συλλογή',
            character_ghost_desc: 'Ένας ήρωας διαχείρισης που επιταχύνει την παραγωγή πόρων και τις κατασκευές. Ιδανικός για τη βελτιστοποίηση της οικονομίας σας.',
            character_travis_name: 'Τράβις',
            character_travis_role: 'Έρευνα & Εκπαίδευση',
            character_travis_desc: 'Ένας ειδικός στην έρευνα και την εκπαίδευση στρατευμάτων. Μειώνει το κόστος και τους χρόνους που απαιτούνται για τεχνολογικές εξελίξεις.',
            character_eva_name: 'Εύα',
            character_eva_role: 'Θεραπεία & Υποστήριγμα',
            character_eva_desc: 'Μια απαραίτητη μονάδα υποστήριξης που μπορεί να θεραπεύσει τραυματισμένα στρατεύματα και να βελτιώσει την επιβίωσή τους στη μάχη.',
            view_details_button: 'Δείτε λεπτομέρειες',
            about_section_title: 'ℹ️ Σχετικά με εμάς',
            about_paragraph1: 'Καλώς ήρθατε στον Οδηγό της Μαύρης Χειρός, την κοινότητα αφιερωμένη στους παίκτες που αναζητούν να βελτιστοποιήσουν την πρόοδό τους και να κυριαρχήσουν σε όλες τις πτυχές του παιχνιδιού. Η αποστολή μας είναι να σας παρέχουμε σαφείς οδηγούς, ενημερωμένες συμβουλές και πολύτιμες πληροφορίες για να σας βοηθήσουμε να γίνετε ένας ελίτ παίκτης.',
            about_paragraph2: 'Είτε είστε αρχάριος που αναζητά το δρόμο του είτε βετεράνος που επιθυμεί να βελτιώσει τις στρατηγικές του, εδώ θα βρείτε τους απαραίτητους πόρους για να επιτύχετε τους στόχους σας. Ελάτε στην κοινότητά μας και ξεκινήστε την ανάβασή σας προς τη νίκη!',
            contact_section_title: '📧 Επικοινωνήστε μαζί μας',
            contact_intro: 'Ερωτήσεις, προτάσεις ή χρειάζεστε βοήθεια; Μην διστάσετε να επικοινωνήσετε μαζί μας!',
            contact_name_placeholder: 'Το όνομά σας',
            contact_email_placeholder: 'Το email σας',
            contact_message_placeholder: 'Το μήνυμά σας',
            contact_send_button: 'Αποστολή Μηνύματος',
            footer_copyright: '&copy; 2025 Ο Οδηγός της Μαύρης Χειρός. Όλα τα δικαιώματα διατηρούνται.',
            search_placeholder: 'Αναζήτηση οδηγού ή χαρακτήρα...'
        }
        // You will need to add more languages here following the same structure
    };

    // Current language (default to French or detect from browser/localStorage)
    let currentLang = localStorage.getItem('lang') || 'fr'; // Use 'fr' as default if no language is saved

    // Get elements for language switcher
    const langToggleButton = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const currentLangFlag = document.getElementById('current-lang-flag');

    // Function to apply translations
    function setLanguage(lang) {
        // Update html lang attribute
        document.documentElement.lang = lang;

        // Update current language flag in the button
        const flag = langMenu.querySelector(`[data-lang="${lang}"]`).textContent.split(' ')[0];
        currentLangFlag.textContent = flag;

        // Update all elements with data-key attributes
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[lang] && translations[lang][key]) {
                // Handle placeholder text for inputs/textareas
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Update search bar placeholder separately as it's not a direct data-key
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.placeholder = translations[lang].search_placeholder;
        }

        currentLang = lang;
        localStorage.setItem('lang', lang); // Save selected language
    }

    // Initialize with saved or default language
    setLanguage(currentLang);

    // Toggle language menu visibility
    langToggleButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling up and closing menu
        langMenu.classList.toggle('hidden');
        langToggleButton.setAttribute('aria-expanded', !langMenu.classList.contains('hidden'));
    });

    // Handle language selection
    langMenu.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = e.target.dataset.lang;
            if (newLang) {
                setLanguage(newLang);
                langMenu.classList.add('hidden'); // Hide menu after selection
                langToggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close language menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!langMenu.contains(e.target) && !langToggleButton.contains(e.target)) {
            langMenu.classList.add('hidden');
            langToggleButton.setAttribute('aria-expanded', 'false');
        }
    });

    // --- End Localization Logic ---

    // Toggle guide content visibility (accordion)
    document.querySelectorAll('.guide-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;
            const targetContent = document.getElementById(targetId);

            if (targetContent) {
                // Close all other open guide sections
                document.querySelectorAll('.guide-content.visible').forEach(openContent => {
                    if (openContent.id !== targetId) {
                        openContent.classList.remove('visible');
                        const correspondingButton = document.querySelector(`.guide-toggle[data-target="${openContent.id}"]`);
                        if (correspondingButton) {
                            correspondingButton.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                // Toggle visibility of the clicked section
                targetContent.classList.toggle('visible');

                // Update aria-expanded attribute for accessibility
                const isVisible = targetContent.classList.contains('visible');
                button.setAttribute('aria-expanded', isVisible);
            }
        });
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hamburger menu toggle for mobile sidebar
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside (for mobile overlay effect)
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Dropdown menu for characters in the sidebar
    const charactersDropdownToggle = document.getElementById('characters-dropdown-toggle');
    const charactersDropdownMenu = document.getElementById('characters-dropdown-menu');

    if (charactersDropdownToggle && charactersDropdownMenu) {
        charactersDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            charactersDropdownMenu.classList.toggle('visible');
            charactersDropdownToggle.classList.toggle('active');
            const isVisible = charactersDropdownMenu.classList.contains('visible');
            charactersDropdownToggle.setAttribute('aria-expanded', isVisible);
        });

        document.addEventListener('click', (e) => {
            if (!charactersDropdownToggle.contains(e.target) && !charactersDropdownMenu.contains(e.target)) {
                charactersDropdownMenu.classList.remove('visible');
                charactersDropdownToggle.classList.remove('active');
                charactersDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Placeholder for event timers (you would integrate your actual timer logic here)
    const timersContainer = document.getElementById('timers-container');
    if (timersContainer) {
        // Simulate loading
        setTimeout(() => {
            timersContainer.innerHTML = `
                <div class="timer-item card">
                    <h4>⏰ ${translations[currentLang].timers_daily_event || 'Événement Quotidien'} : ${translations[currentLang].timers_infected_hunt || 'Chasse aux Infectés'}</h4>
                    <p>${translations[currentLang].timers_next_in || 'Prochainement dans'} : <span class="countdown" data-time="2025-06-24T18:00:00">Chargement...</span></p>
                </div>
                <div class="timer-item card">
                    <h4>🌟 ${translations[currentLang].timers_weekly_event || 'Événement Hebdomadaire'} : ${translations[currentLang].timers_alliance_war || 'Guerre d\'Alliance'}</h4>
                    <p>${translations[currentLang].timers_start_in || 'Début dans'} : <span class="countdown" data-time="2025-06-26T10:00:00">Chargement...</span></p>
                </div>
                <div class="timer-item card">
                    <h4>🏆 ${translations[currentLang].timers_special_event || 'Événement Spécial'} : ${translations[currentLang].timers_state_championship || 'Championnat des États'}</h4>
                    <p>${translations[currentLang].timers_end_in || 'Fin dans'} : <span class="countdown" data-time="2025-06-25T23:59:59">Chargement...</span></p>
                </div>
            `;
            updateCountdowns();
            setInterval(updateCountdowns, 1000);
        }, 1500);
    }
});

// Function to update countdowns
function updateCountdowns() {
    document.querySelectorAll('.countdown').forEach(countdownElement => {
        const targetTime = new Date(countdownElement.dataset.time).getTime();
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance < 0) {
            countdownElement.textContent = 'Terminé !'; // This should also be translatable eventually
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let countdownText = '';
        if (days > 0) countdownText += `${days}j `;
        countdownText += `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
        countdownElement.textContent = countdownText.trim();
    });
}

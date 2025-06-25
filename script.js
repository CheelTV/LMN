document.addEventListener('DOMContentLoaded', () => {
    // --- Localization (i18n) Data with ALL Translations ---
    const translations = {
        fr: {
            // General elements
            home_link: 'Accueil',
            timers_link: 'Timers d\'Événements',
            guides_link: 'Guides Stratégiques', // Parent guide link
            general_guides_link: 'Guides Généraux', // New sub-category
            koh_guide_link: 'King of the Hill (KoH)', // New sub-category
            characters_link: 'Personnages',
            about_link: 'À Propos',
            contact_link: 'Contact',
            hero_title: 'Bienvenue sur Le Guide de La Main Noire',
            hero_subtitle: 'Votre ressource ultime pour dominer le jeu et progresser efficacement !',
            hero_cta: 'Découvrir les Guides',
            timers_section_title: '⏱️ Timers d\'Événements',
            timers_loading: 'Chargement des timers...',
            timers_note: '* Tous les horaires sont affichés dans votre fuseau horaire local.',
            guides_section_title: '📚 Guides Stratégiques', // This is still used for the main guides page content
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
            character_lucky_name: 'Lucky',
            character_lucky_role: 'Chance & Collecte',
            character_lucky_desc: 'Un héros axé sur la chance et la collecte de ressources, idéal pour optimiser les gains sur la carte.',
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
            search_placeholder: 'Rechercher un guide ou un personnage...',
            day_mode: '☀️ Mode Jour',
            night_mode: '🌙 Mode Nuit',
            timers_daily_event: 'Événement Quotidien',
            timers_infected_hunt: 'Chasse aux Infectés',
            timers_next_in: 'Prochainement dans',
            timers_weekly_event: 'Événement Hebdomadaire',
            timers_alliance_war: 'Guerre d\'Alliance',
            timers_start_in: 'Début dans',
            timers_special_event: 'Événement Spécial',
            timers_state_championship: 'Championnat des États',
            timers_end_in: 'Fin dans',
            timers_ended: 'Terminé !',
            page_not_found_title: 'Page non trouvée',
            page_not_found_message: 'Désolé, la page que vous recherchez n\'a pas pu être chargée.',
            discord_invite_title: '🎉 Rejoignez notre Communauté Discord !',
            discord_invite_text: 'Ne manquez aucune discussion, astuce ou annonce ! Rejoignez notre serveur Discord pour échanger avec d\'autres passionnés et obtenir de l\'aide en direct.',
            discord_join_button: 'Rejoindre le Discord',
            timers_influencer_trap: 'Piège à influenceurs',
            koh_guide_title: '👑 Guide de Stratégie : King of the Hill (KoH)',
            koh_intro: 'Ce guide détaille la stratégie pour l\'événement King of the Hill (KoH), un événement de 60 minutes divisé en 3 étapes de 20 minutes chacune.',
            koh_plan_title: 'Plan Initial : King of the Hill (Dimanche 18.08)',
            koh_plan_info: 'Le plan alloue des équipes à des positions spécifiques avec des leaders et des membres.',
            koh_leader_a: 'Leader A (Centre)', // Updated to generic
            koh_leader_b: 'Leader B (Gauche)', // Updated to generic
            koh_leader_c: 'Leader C (Droite)', // Updated to generic
            koh_stage1_title: 'Étape 1 : Occupation du Territoire (20 minutes)',
            koh_stage1_obj: 'Objectif :',
            koh_stage1_action: 'Action :',
            koh_stage1_key: 'Point Clé :',
            koh_stage1_note: 'Il doit y avoir des marches en cours dans tous les bâtiments qui sont en contact avec le territoire des adversaires pour les empêcher d\'entrer et d\'occuper notre territoire.',
            koh_stage2_title: 'Étape 2 : Capture des Villes Clés (20 minutes)',
            koh_stage2_obj: 'Objectif :',
            koh_stage2_action: 'Action :',
            koh_stage2_key: 'Point Clé :',
            koh_stage2_teamA: 'Équipe A : occupe (A31, A32), (B31, B32), (C31, C32).',
            koh_stage2_teamB: 'Équipe B : occupe (B31, B32).',
            koh_stage2_teamC: 'Équipe C : occupe (C31, C32).',
            koh_stage2_result: 'Ce blocage nous permettra de bloquer le passage de nos adversaires vers le centre, et à l\'étape 3, ils ne pourront pas y entrer.',
            koh_stage3_title: 'Étape 3 : Combat pour le Centre / Blocage (20 minutes)',
            koh_stage3_obj: 'Objectif :',
            koh_stage3_action: 'Action :',
            koh_stage3_key: 'Point Clé :',
            koh_stage3_last_sentence: 'Si nous pouvons bloquer tout autour du centre, alors seules quelques personnes iront au centre, il n\'est pas nécessaire d\'y courir tous ensemble, car l\'adversaire ne pourra pas y entrer. Nous surveillons les bâtiments autour du centre et ne laissons pas l\'adversaire passer.', // Adjusted
            koh_final_phase_title: 'Phase Finale (20 dernières minutes)',
            koh_final_phase_text: 'Pendant les 20 dernières minutes, nous nous battrons sur tous les bâtiments de la carte et collecterons des points. L\'union qui marque le plus de points l\'emportera.',
            koh_bug_note: '🚨 **NOTE IMPORTANTE :** Il y a des bugs dans le jeu concernant l\'heure exacte des événements. Merci de vous connecter à **12:00 UTC** pour être en ligne.',
            koh_questions_pm: 'Si vous avez des questions concernant cet événement, vous pouvez me les poser en message privé.'
        },
        en: {
            home_link: 'Home',
            timers_link: 'Event Timers',
            guides_link: 'Strategy Guides',
            general_guides_link: 'General Guides',
            koh_guide_link: 'King of the Hill (KoH)',
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
            character_lucky_name: 'Lucky',
            character_lucky_role: 'Luck & Gathering',
            character_lucky_desc: 'A hero focused on luck and resource gathering, ideal for optimizing gains on the map.',
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
            search_placeholder: 'Search for a guide or character...',
            day_mode: '☀️ Day Mode',
            night_mode: '🌙 Night Mode',
            timers_daily_event: 'Daily Event',
            timers_infected_hunt: 'Infected Hunt',
            timers_next_in: 'Next in',
            timers_weekly_event: 'Weekly Event',
            timers_alliance_war: 'Alliance War',
            timers_start_in: 'Starts in',
            timers_special_event: 'Special Event',
            timers_state_championship: 'State Championship',
            timers_end_in: 'Ends in',
            timers_ended: 'Finished!',
            page_not_found_title: 'Page Not Found',
            page_not_found_message: 'Sorry, the page you are looking for could not be loaded.',
            discord_invite_title: '🎉 Join our Discord Community!',
            discord_invite_text: 'Don\'t miss any discussions, tips, or announcements! Join our Discord server to chat with other enthusiasts and get live help.',
            discord_join_button: 'Join Discord',
            timers_influencer_trap: 'Influencer Trap',
            koh_guide_title: '👑 Strategy Guide: King of the Hill (KoH)',
            koh_intro: 'This guide details the strategy for the King of the Hill (KoH) event, a 60-minute event divided into 3 stages of 20 minutes each.',
            koh_plan_title: 'Initial Plan: King of the Hill (Sunday 18.08)',
            koh_plan_info: 'The plan assigns teams to specific positions with leaders and members.',
            koh_leader_a: 'Leader A (Center)',
            koh_leader_b: 'Leader B (Left)',
            koh_leader_c: 'Leader C (Right)',
            koh_stage1_title: 'Stage 1: Territory Occupation (20 minutes)',
            koh_stage1_obj: 'Objective:',
            koh_stage1_action: 'Action:',
            koh_stage1_key: 'Key Point:',
            koh_stage1_note: 'There should be marches underway in all buildings that are in contact with opponent\'s territory to prevent them from entering and occupying our territory.',
            koh_stage2_title: 'Stage 2: Key City Capture (20 minutes)',
            koh_stage2_obj: 'Objective:',
            koh_stage2_action: 'Action:',
            koh_stage2_key: 'Key Point:',
            koh_stage2_teamA: 'Team A: occupies (A31, A32), (B31, B32), (C31, C32).',
            koh_stage2_teamB: 'Team B: occupies (B31, B32).',
            koh_stage2_teamC: 'Team C: occupies (C31, C32).',
            koh_stage2_result: 'This blockade will allow us to block the passage of our opponents to the center, and in Stage 3, they will not be able to enter there.',
            koh_stage3_title: 'Stage 3: Fight for the Center / Blockade (20 minutes)',
            koh_stage3_obj: 'Objective:',
            koh_stage3_action: 'Action:',
            koh_stage3_key: 'Key Point:',
            koh_stage3_last_sentence: 'If we can block everything around the center, then only a few people go to the center, there is no need to run there together, since the opponent will not be able to enter there. We watch the buildings around the center and do not let the opponent pass.',
            koh_final_phase_title: 'Final Phase (Last 20 minutes)',
            koh_final_phase_text: 'During the last 20 minutes, we will fight on all buildings on the map and collect points. The union that scores the most points will win.',
            koh_bug_note: '🚨 **IMPORTANT NOTE:** There are bugs in the game regarding the exact event time. Please be online at **12:00 UTC** to be ready.',
            koh_questions_pm: 'If you have any questions about this event, you can ask me in private message.'
        },
        ko: { // Korean
            home_link: '홈',
            timers_link: '이벤트 타이머',
            guides_link: '전략 가이드',
            general_guides_link: '일반 가이드',
            koh_guide_link: '언덕의 왕 (KoH)',
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
            character_lucky_name: '럭키',
            character_lucky_role: '운 및 수집',
            character_lucky_desc: '지도에서 이득을 최적화하는 데 이상적인 운과 자원 수집에 중점을 둔 영웅입니다.',
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
            search_placeholder: '가이드 또는 캐릭터 검색...',
            day_mode: '☀️ 낮 모드',
            night_mode: '🌙 밤 모드',
            timers_daily_event: '일일 이벤트',
            timers_infected_hunt: '감염자 사냥',
            timers_next_in: '다음',
            timers_weekly_event: '주간 이벤트',
            timers_alliance_war: '동맹 전쟁',
            timers_start_in: '시작',
            timers_special_event: '특별 이벤트',
            timers_state_championship: '주 챔피언십',
            timers_end_in: '종료',
            timers_ended: '완료!',
            page_not_found_title: '페이지를 찾을 수 없습니다',
            page_not_found_message: '죄송합니다. 찾으시는 페이지를 로드할 수 없습니다.',
            discord_invite_title: '🎉 저희 디스코드 커뮤니티에 참여하세요!',
            discord_invite_text: '어떤 토론, 팁, 공지도 놓치지 마세요! 저희 디스코드 서버에 참여하여 다른 열정적인 사람들과 교류하고 실시간으로 도움을 받으세요.',
            discord_join_button: '디스코드 참여',
            timers_influencer_trap: '인플루언서 트랩',
            koh_guide_title: '👑 전략 가이드: 언덕의 왕 (KoH)',
            koh_intro: '이 가이드는 언덕의 왕 (KoH) 이벤트 전략을 설명합니다. 이 이벤트는 각각 20분씩 3단계로 나뉘어 총 60분 동안 진행됩니다.',
            koh_plan_title: '초기 계획: 언덕의 왕 (일요일 18.08)',
            koh_plan_info: '이 계획은 특정 위치에 팀을 할당하고 리더와 구성원을 지정합니다.',
            koh_leader_a: '리더 A (중앙)',
            koh_leader_b: '리더 B (왼쪽)',
            koh_leader_c: '리더 C (오른쪽)',
            koh_stage1_title: '1단계: 영토 점령 (20분)',
            koh_stage1_obj: '목표:',
            koh_stage1_action: '행동:',
            koh_stage1_key: '핵심 포인트:',
            koh_stage1_note: '상대방의 영토와 접촉하는 모든 건물에 계속해서 행진을 보내 상대방이 우리 영토에 진입하여 점령하는 것을 막아야 합니다.',
            koh_stage2_title: '2단계: 주요 도시 점령 (20분)',
            koh_stage2_obj: '목표:',
            koh_stage2_action: '행동:',
            koh_stage2_key: '핵심 포인트:',
            koh_stage2_teamA: '팀 A: (A31, A32), (B31, B32), (C31, C32)를 점령합니다.',
            koh_stage2_teamB: '팀 B: (B31, B32)를 점령합니다.',
            koh_stage2_teamC: '팀 C: (C31, C32)를 점령합니다.',
            koh_stage2_result: '이 봉쇄는 상대방이 중앙으로 통과하는 것을 막을 것이며, 3단계에서는 진입할 수 없습니다.',
            koh_stage3_title: '3단계: 중앙 전투 / 봉쇄 (20분)',
            koh_stage3_obj: '목표:',
            koh_stage3_action: '행동:',
            koh_stage3_key: '핵심 포인트:',
            koh_stage3_last_sentence: '중앙 주변의 모든 것을 봉쇄할 수 있다면 소수의 인원만 중앙으로 이동하면 됩니다. 상대방이 진입할 수 없으므로 모두 함께 달려갈 필요는 없습니다. 중앙 주변의 건물을 주시하고 상대방이 통과하지 못하게 합니다.',
            koh_final_phase_title: '최종 단계 (마지막 20분)',
            koh_final_phase_text: '마지막 20분 동안은 지도상의 모든 건물에서 전투하고 점수를 수집합니다. 가장 많은 점수를 획득한 연맹이 승리합니다.',
            koh_bug_note: '🚨 **중요 참고:** 게임에 정확한 이벤트 시간과 관련된 버그가 있습니다. 준비를 위해 **UTC 12:00**에 접속해 주십시오.',
            koh_questions_pm: '이 이벤트에 대해 궁금한 점이 있으시면 개인 메시지로 문의해주세요.'
        },
        it: { // Italian
            home_link: 'Home',
            timers_link: 'Timer Eventi',
            guides_link: 'Guide Strategiche',
            general_guides_link: 'Guide Generali',
            koh_guide_link: 'Re della Collina (KoH)',
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
            character_lucky_name: 'Lucky',
            character_lucky_role: 'Fortuna e Raccolta',
            character_lucky_desc: 'Un eroe focalizzato sulla fortuna e sulla raccolta di risorse, ideale per ottimizzare i guadagni sulla mappa.',
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
            search_placeholder: 'Cerca una guida o un personaggio...',
            day_mode: '☀️ Modalità Giorno',
            night_mode: '🌙 Modalità Notte',
            timers_daily_event: 'Evento Quotidiano',
            timers_infected_hunt: 'Caccia agli Infetti',
            timers_next_in: 'Prossimamente in',
            timers_weekly_event: 'Evento Settimanale',
            timers_alliance_war: 'Guerra d\'Alleanza',
            timers_start_in: 'Inizia in',
            timers_special_event: 'Evento Speciale',
            timers_state_championship: 'Campionato di Stato',
            timers_end_in: 'Termina in',
            timers_ended: 'Finito!',
            page_not_found_title: 'Pagina non trovata',
            page_not_found_message: 'Spiacenti, la pagina che stai cercando non è stata caricata.',
            discord_invite_title: '🎉 Unisciti alla nostra Comunità Discord!',
            discord_invite_text: 'Non perdere nessuna discussione, suggerimento o annuncio! Unisciti al nostro server Discord per chattare con altri appassionati e ottenere aiuto dal vivo.',
            discord_join_button: 'Unisciti a Discord',
            timers_influencer_trap: 'Trappola per Influencer',
            koh_guide_title: '👑 Guida Strategica: Re della Collina (KoH)',
            koh_intro: 'Questa guida illustra la strategia per l\'evento Re della Collina (KoH), un evento di 60 minuti diviso in 3 fasi di 20 minuti ciascuna.',
            koh_plan_title: 'Piano Iniziale: Re della Collina (Domenica 18.08)',
            koh_plan_info: 'Il piano assegna le squadre a posizioni specifiche con leader e membri.',
            koh_leader_a: 'Leader A (Centro)',
            koh_leader_b: 'Leader B (Sinistra)',
            koh_leader_c: 'Leader C (Destra)',
            koh_stage1_title: 'Fase 1: Occupazione del Territorio (20 minuti)',
            koh_stage1_obj: 'Obiettivo:',
            koh_stage1_action: 'Azione:',
            koh_stage1_key: 'Punto Chiave:',
            koh_stage1_note: 'Ci devono essere sempre marce in corso in tutti gli edifici che sono a contatto con il territorio avversario per impedire loro di entrare e occupare il nostro territorio.',
            koh_stage2_title: 'Fase 2: Cattura delle Città Chiave (20 minuti)',
            koh_stage2_obj: 'Obiettivo:',
            koh_stage2_action: 'Azione:',
            koh_stage2_key: 'Punto Chiave:',
            koh_stage2_teamA: 'Squadra A: occupa (A31, A32), (B31, B32), (C31, C32).',
            koh_stage2_teamB: 'Squadra B: occupa (B31, B32).',
            koh_stage2_teamC: 'Squadra C: occupa (C31, C32).',
            koh_stage2_result: 'Questo blocco ci permetterà di bloccare il passaggio dei nostri avversari verso il centro e nella Fase 3 non potranno entrare.',
            koh_stage3_title: 'Fase 3: Battaglia per il Centro / Blocco (20 minuti)',
            koh_stage3_obj: 'Obiettivo:',
            koh_stage3_action: 'Azione:',
            koh_stage3_key: 'Punto Chiave:',
            koh_stage3_last_sentence: 'Se riusciamo a bloccare tutto intorno al centro, allora solo poche persone andranno al centro, non è necessario correre tutti insieme, poiché l\'avversario non potrà entrare. Controlliamo gli edifici intorno al centro e non lasciamo passare l\'avversario.',
            koh_final_phase_title: 'Fase Finale (Ultimi 20 minuti)',
            koh_final_phase_text: 'Durante gli ultimi 20 minuti, combatteremo su tutti gli edifici sulla mappa e raccoglieremo punti. L\'unione che segna più punti vincerà.',
            koh_bug_note: '🚨 **NOTA IMPORTANTE:** Ci sono bug nel gioco riguardo l\'orario esatto degli eventi. Connettetevi alle **12:00 UTC** per essere pronti.',
            koh_questions_pm: 'Se avete domande su questo evento, potete chiedermele in messaggio privato.'
        },
        es: { // Spanish
            home_link: 'Inicio',
            timers_link: 'Temporizadores de Eventos',
            guides_link: 'Guías Estratégicas',
            general_guides_link: 'Guías Generales',
            koh_guide_link: 'Rey de la Colina (KoH)',
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
            character_sarge_desc: 'El tanque del equipo, excelente para defender tu base. Él reduce el daño recibido y fortalece la durabilidad de las tropas.',
            character_ghost_name: 'Ghost',
            character_ghost_role: 'Desarrollo y Recolección',
            character_ghost_desc: 'Un héroe de intendencia que acelera la producción de recursos y las construcciones. Ideal para optimizar tu economía.',
            character_travis_name: 'Travis',
            character_travis_role: 'Investigación y Entrenamiento',
            character_travis_desc: 'Especialista en investigación y entrenamiento de tropas. Él reduce los costos y los tiempos necesarios para los avances tecnológicos.',
            character_eva_name: 'Eva',
            character_eva_role: 'Curación y Apoyo',
            character_eva_desc: 'Una unidad de apoyo esencial que puede curar tropas heridas y mejorar su supervivencia en combate.',
            character_lucky_name: 'Lucky',
            character_lucky_role: 'Suerte y Recolección',
            character_lucky_desc: 'Un héroe enfocado en la suerte y la recolección de recursos, ideal para optimizar las ganancias en el mapa.',
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
            search_placeholder: 'Buscar una guía o personaje...',
            day_mode: '☀️ Modo Día',
            night_mode: '🌙 Modo Noche',
            timers_daily_event: 'Evento Diario',
            timers_infected_hunt: 'Caza de Infectados',
            timers_next_in: 'Próximamente en',
            timers_weekly_event: 'Evento Semanal',
            timers_alliance_war: 'Guerra de Alianza',
            timers_start_in: 'Comienza en',
            timers_special_event: 'Evento Especial',
            timers_state_championship: 'Campeonato de Estado',
            timers_end_in: 'Termina en',
            timers_ended: '¡Terminado!',
            page_not_found_title: 'Página no encontrada',
            page_not_found_message: 'Lo sentimos, la página que buscas no pudo ser cargada.',
            discord_invite_title: '🎉 ¡Únete a nuestra Comunidad de Discord!',
            discord_invite_text: '¡No te pierdas ninguna discusión, consejo o anuncio! Únete a nuestro servidor de Discord para chatear con otros entusiastas y obtener ayuda en vivo.',
            discord_join_button: 'Unirse a Discord',
            timers_influencer_trap: 'Trampa de Influencers',
            koh_guide_title: '👑 Guía de Estrategia: Rey de la Colina (KoH)',
            koh_intro: 'Esta guía detalla la estrategia para el evento Rey de la Colina (KoH), un evento de 60 minutos dividido en 3 etapas de 20 minutos cada una.',
            koh_plan_title: 'Plan Inicial: Rey de la Colina (Domingo 18.08)',
            koh_plan_info: 'El plan asigna equipos a posiciones específicas con líderes y miembros.',
            koh_leader_a: 'Líder A (Centro)',
            koh_leader_b: 'Líder B (Izquierda)',
            koh_leader_c: 'Líder C (Derecha)',
            koh_stage1_title: 'Etapa 1: Ocupación del Territorio (20 minutos)',
            koh_stage1_obj: 'Objetivo:',
            koh_stage1_action: 'Acción:',
            koh_stage1_key: 'Punto Clave:',
            koh_stage1_note: 'Debe haber marchas en curso en todos los edificios que estén en contacto con el territorio del oponente para evitar que entren y ocupen nuestro territorio.',
            koh_stage2_title: 'Etapa 2: Captura de Ciudades Clave (20 minutos)',
            koh_stage2_obj: 'Objetivo:',
            koh_stage2_action: 'Acción:',
            koh_stage2_key: 'Punto Clave:',
            koh_stage2_teamA: 'Equipo A: ocupa (A31, A32), (B31, B32), (C31, C32).',
            koh_stage2_teamB: 'Equipo B: ocupa (B31, B32).',
            koh_stage2_teamC: 'Equipo C: ocupa (C31, C32).',
            koh_stage2_result: 'Este bloqueo nos permitirá bloquear el paso de nuestros oponentes hacia el centro, y en la Etapa 3, no podrán entrar allí.',
            koh_stage3_title: 'Etapa 3: Lucha por el Centro / Bloqueo (20 minutos)',
            koh_stage3_obj: 'Objetivo:',
            koh_stage3_action: 'Acción:',
            koh_stage3_key: 'Punto Clave:',
            koh_stage3_last_sentence: 'Si podemos bloquear todo alrededor del centro, solo unas pocas personas irán al centro, no es necesario correr todos juntos, ya que el oponente no podrá entrar allí. Vigilamos los edificios alrededor del centro y no dejamos pasar al oponente.',
            koh_final_phase_title: 'Fase Final (Últimos 20 minutos)',
            koh_final_phase_text: 'Durante los últimos 20 minutos, lucharemos en todos los edificios del mapa y recolectaremos puntos. La unión que obtenga más puntos ganará.',
            koh_bug_note: '🚨 **NOTA IMPORTANTE:** Hay errores en el juego con respecto a la hora exacta del evento. Por favor, conéctate a las **12:00 UTC** para estar listo.',
            koh_questions_pm: 'Si tienes alguna pregunta sobre este evento, puedes consultarme en mensaje privado.'
        },
        ru: { // Russian
            home_link: 'Главная',
            timers_link: 'Таймеры событий',
            guides_link: 'Стратегические руководства',
            general_guides_link: 'Общие руководства',
            koh_guide_link: 'Царь Горы (KoH)',
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
            character_lucky_name: 'Лаки',
            character_lucky_role: 'Удача и Сбор',
            character_lucky_desc: 'Герой, ориентированный на удачу и сбор ресурсов, идеально подходит для оптимизации прибыли на карте.',
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
            search_placeholder: 'Поиск руководства или персонажа...',
            day_mode: '☀️ Дневной режим',
            night_mode: '🌙 Ночной режим',
            timers_daily_event: 'Ежедневное событие',
            timers_infected_hunt: 'Охота на зараженных',
            timers_next_in: 'Следующее через',
            timers_weekly_event: 'Еженедельное событие',
            timers_alliance_war: 'Война альянсов',
            timers_start_in: 'Начало через',
            timers_special_event: 'Специальное событие',
            timers_state_championship: 'Чемпионат штата',
            timers_end_in: 'Заканчивается через',
            timers_ended: 'Завершено!',
            page_not_found_title: 'Страница не найдена',
            page_not_found_message: 'К сожалению, страница, которую вы ищете, не может быть загружена.',
            discord_invite_title: '🎉 Присоединяйтесь к нашему сообществу Discord!',
            discord_invite_text: 'Не пропустите ни одной дискуссии, совета или объявления! Присоединяйтесь к нашему Discord-серверу, чтобы общаться с другими энтузиастами и получать живую помощь.',
            discord_join_button: 'Присоединиться к Discord',
            timers_influencer_trap: 'Ловушка для инфлюенсеров',
            koh_guide_title: '👑 Руководство по стратегии: Царь Горы (KoH)',
            koh_intro: 'Это руководство описывает стратегию для события «Царь Горы» (KoH), 60-минутного события, разделенного на 3 этапа по 20 минут каждый.',
            koh_plan_title: 'Первоначальный план: Царь Горы (воскресенье, 18.08)',
            koh_plan_info: 'План назначает команды на определенные позиции с лидерами и участниками.',
            koh_leader_a: 'Лидер А (Центр)',
            koh_leader_b: 'Лидер Б (Лево)',
            koh_leader_c: 'Лидер В (Право)',
            koh_stage1_title: 'Этап 1: Захват территории (20 минут)',
            koh_stage1_obj: 'Цель:',
            koh_stage1_action: 'Действие:',
            koh_stage1_key: 'Ключевой момент:',
            koh_stage1_note: 'Всегда должны быть марши на все здания, которые находятся в контакте с территорией противника, чтобы не дать им войти и занять нашу территорию.',
            koh_stage2_title: 'Этап 2: Захват ключевых городов (20 минут)',
            koh_stage2_obj: 'Цель:',
            koh_stage2_action: 'Действие:',
            koh_stage2_key: 'Ключевой момент:',
            koh_stage2_teamA: 'Команда А: занимает (А31, А32), (Б31, Б32), (В31, В32).',
            koh_stage2_teamB: 'Команда Б: занимает (Б31, Б32).',
            koh_stage2_teamC: 'Команда В: занимает (В31, В32).',
            koh_stage2_result: 'Эта блокада позволит нам заблокировать проход наших противников к центру, и на этапе 3 они не смогут туда войти.',
            koh_stage3_title: 'Этап 3: Битва за Центр / Блокада (20 минут)',
            koh_stage3_obj: 'Цель:',
            koh_stage3_action: 'Действие:',
            koh_stage3_key: 'Ключевой момент:',
            koh_stage3_last_sentence: 'Если мы сможем заблокировать все вокруг центра, то только несколько человек пойдут в центр, не нужно бежать туда всем вместе, так как противник не сможет туда войти. Мы следим за зданиями вокруг центра и не даем противнику пройти.',
            koh_final_phase_title: 'Финальная фаза (последние 20 минут)',
            koh_final_phase_text: 'В течение последних 20 минут мы будем сражаться за все здания на карте и собирать очки. Союз, набравший наибольшее количество очков, победит.',
            koh_bug_note: '🚨 **ВАЖНОЕ ПРИМЕЧАНИЕ:** В игре есть ошибки, касающиеся точного времени события. Пожалуйста, будьте онлайн в **12:00 UTC**, чтобы быть готовыми.',
            koh_questions_pm: 'Если у вас есть какие-либо вопросы по этому событию, вы можете задать их мне в личном сообщении.'
        },
        zh: { // Chinese
            home_link: '主页',
            timers_link: '活动计时器',
            guides_link: '策略指南',
            general_guides_link: '通用指南',
            koh_guide_link: '山丘之王 (KoH)',
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
            tip3_strong: '仓库：',
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
            search_placeholder: '搜索指南或角色...',
            day_mode: '☀️ 日间模式',
            night_mode: '🌙 夜间模式',
            timers_daily_event: '每日活动',
            timers_infected_hunt: '感染者狩猎',
            timers_next_in: '距离下次：',
            timers_weekly_event: '每周活动',
            timers_alliance_war: '联盟战争',
            timers_start_in: '开始于：',
            timers_special_event: '特殊活动',
            timers_state_championship: '州冠军赛',
            timers_end_in: '结束于：',
            timers_ended: '已完成！',
            page_not_found_title: '页面未找到',
            page_not_found_message: '抱歉，无法加载您要查找的页面。',
            discord_invite_title: '🎉 加入我们的Discord社区！',
            discord_invite_text: '不要错过任何讨论、提示或公告！加入我们的Discord服务器，与其他爱好者交流并获得实时帮助。',
            discord_join_button: '加入Discord',
            timers_influencer_trap: '网红陷阱',
            koh_guide_title: '👑 策略指南: 山丘之王 (KoH)',
            koh_intro: '本指南详细介绍了山丘之王 (KoH) 活动的策略，这是一个为期 60 分钟的活动，分为 3 个阶段，每个阶段 20 分钟。',
            koh_plan_title: '初始计划：山丘之王 (8月18日星期日)',
            koh_plan_info: '该计划为特定位置分配了团队，并指定了领导者和成员。',
            koh_leader_a: '领导者 A (中心)',
            koh_leader_b: '领导者 B (左)',
            koh_leader_c: '领导者 C (右)',
            koh_stage1_title: '阶段 1: 领土占领 (20 分钟)',
            koh_stage1_obj: '目标:',
            koh_stage1_action: '行动:',
            koh_stage1_key: '关键点:',
            koh_stage1_note: '所有与对手领土接触的建筑物都应有行军部队，以防止他们进入和占领我们的领土。',
            koh_stage2_title: '阶段 2: 关键城市占领 (20 分钟)',
            koh_stage2_obj: '目标:',
            koh_stage2_action: '行动:',
            koh_stage2_key: '关键点:',
            koh_stage2_teamA: 'A 队: 占领 (A31, A32), (B31, B32), (C31, C32)。',
            koh_stage2_teamB: 'B 队: 占领 (B31, B32)。',
            koh_stage2_teamC: 'C 队: 占领 (C31, C32)。',
            koh_stage2_result: '这种封锁将阻止我们的对手进入中心，在第 3 阶段他们将无法进入。',
            koh_stage3_title: '阶段 3: 争夺中心 / 封锁 (20 分钟)',
            koh_stage3_obj: '目标:',
            koh_stage3_action: '行动:',
            koh_stage3_key: '关键点:',
            koh_stage3_last_sentence: '如果我们能够封锁中心周围的一切，那么只有少数人会进入中心，没有必要都一起跑过去，因为对手将无法进入。我们监视中心周围的建筑物，不让对手通过。',
            koh_final_phase_title: '最后阶段 (最后 20 分钟)',
            koh_final_phase_text: '在最后 20 分钟，我们将在地图上的所有建筑物中战斗并收集积分。得分最高的联盟将获胜。',
            koh_bug_note: '🚨 **重要提示:** 游戏中存在与确切事件时间相关的错误。请在 **UTC 12:00** 在线，做好准备。',
            koh_questions_pm: '如果您对本次活动有任何疑问，可以私信我。'
        },
        ja: { // Japanese
            home_link: 'ホーム',
            timers_link: 'イベントタイマー',
            guides_link: '戦略ガイド',
            general_guides_link: '一般ガイド',
            koh_guide_link: 'キングオブザヒル (KoH)',
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
            character_lucky_name: 'ラッキー',
            character_lucky_role: '運＆収集',
            character_lucky_desc: '運と資源収集に焦点を当てたヒーローで、マップでの利益を最大化するのに理想的です。',
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
            search_placeholder: 'ガイドまたはキャラクターを検索...',
            day_mode: '☀️ 日間モード',
            night_mode: '🌙 夜間モード',
            timers_daily_event: 'デイリーイベント',
            timers_infected_hunt: '感染者ハント',
            timers_next_in: '次まで',
            timers_weekly_event: 'ウィークリーイベント',
            timers_alliance_war: 'アライアンス戦争',
            timers_start_in: '開始まで',
            timers_special_event: 'スペシャルイベント',
            timers_state_championship: '州チャンピオンシップ',
            timers_end_in: '終了まで',
            timers_ended: '完了！',
            page_not_found_title: 'ページが見つかりません',
            page_not_found_message: '申し訳ありません。お探しのページを読み込めませんでした。',
            discord_invite_title: '🎉 Discordコミュニティに参加しよう！',
            discord_invite_text: '議論、ヒント、お知らせを見逃さないでください！私たちのDiscordサーバーに参加して、他の愛好家と交流し、ライブでサポートを受けましょう。',
            discord_join_button: 'Discordに参加',
            timers_influencer_trap: 'インフルエンサー トラップ',
            koh_guide_title: '👑 戦略ガイド: キングオブザヒル (KoH)',
            koh_intro: 'このガイドでは、キングオブザヒル (KoH) イベントの戦略について詳しく説明します。これは、それぞれ20分間の3つのステージに分けられた60分間のイベントです。',
            koh_plan_title: '初期計画: キングオブザヒル (8月18日日曜日)',
            koh_plan_info: 'この計画は、リーダーとメンバーを持つ特定のポジションにチームを割り当てます。',
            koh_leader_a: 'リーダー A (中央)',
            koh_leader_b: 'リーダー B (左)',
            koh_leader_c: 'リーダー C (右)',
            koh_stage1_title: 'ステージ 1: 領土占領 (20分)',
            koh_stage1_obj: '目的:',
            koh_stage1_action: '行動:',
            koh_stage1_key: '重要なポイント:',
            koh_stage1_note: '相手の領土と接触しているすべての建物では常に進軍が行われ、彼らが私たちの領土に侵入して占領するのを防ぐ必要があります。',
            koh_stage2_title: 'ステージ 2: 主要都市の確保 (20分)',
            koh_stage2_obj: '目的:',
            koh_stage2_action: '行動:',
            koh_stage2_key: '重要なポイント:',
            koh_stage2_teamA: 'チーム A: (A31, A32), (B31, B32), (C31, C32) を占領します。',
            koh_stage2_teamB: 'チーム B: (B31, B32) を占領します。',
            koh_stage2_teamC: 'チーム C: (C31, C32) を占領します。',
            koh_stage2_result: 'この封鎖により、敵が中央に進むのをブロックできるようになり、ステージ3では侵入できなくなります。',
            koh_stage3_title: 'ステージ 3: 中央の戦い / 封鎖 (20分)',
            koh_stage3_obj: '目的:',
            koh_stage3_action: '行動:',
            koh_stage3_key: '重要なポイント:',
            koh_stage3_last_sentence: '中央の周囲をすべてブロックできる場合、中央に行くのは数人だけで済みます。敵は侵入できないため、全員で走っていく必要はありません。中央周辺の建物を監視し、敵が通過しないようにします。',
            koh_final_phase_title: '最終フェーズ (最後の20分)',
            koh_final_phase_text: '最後の20分間は、マップ上のすべての建物を巡って戦い、ポイントを集めます。最も多くのポイントを獲得した同盟が勝利します。',
            koh_bug_note: '🚨 **重要事項:** ゲームには正確なイベント時間に関するバグがあります。準備のため、**UTC 12:00** にオンラインにしてください。',
            koh_questions_pm: 'このイベントについてご質問がある場合は、プライベートメッセージでお尋ねください。'
        },
        el: { // Greek
            home_link: 'Αρχική',
            timers_link: 'Χρονοδιακόπτες Εκδηλώσεων',
            guides_link: 'Στρατηγικοί Οδηγοί',
            general_guides_link: 'Γενικοί Οδηγοί',
            koh_guide_link: 'Βασιλιάς του Λόφου (KoH)',
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
            character_lucky_name: 'Λάκυ',
            character_lucky_role: 'Τύχη & Συλλογή',
            character_lucky_desc: 'Ένας ήρωας που επικεντρώνεται στην τύχη και τη συλλογή πόρων, ιδανικός για τη βελτιστοποίηση των κερδών στο χάρτη.',
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
            search_placeholder: 'Αναζήτηση οδηγού ή χαρακτήρα...',
            day_mode: '☀️ Λειτουργία Ημέρας',
            night_mode: '🌙 Λειτουργία Νύχτας',
            timers_daily_event: 'Καθημερινή Εκδήλωση',
            timers_infected_hunt: 'Κυνήγι Μολυσμένων',
            timers_next_in: 'Επόμενο σε',
            timers_weekly_event: 'Εβδομαδιαία Εκδήλωση',
            timers_alliance_war: 'Πόλεμος Συμμαχιών',
            timers_start_in: 'Έναρξη σε',
            timers_special_event: 'Ειδική Εκδήλωση',
            timers_state_championship: 'Πρωτάθλημα Πολιτείας',
            timers_end_in: 'Τέλος σε',
            timers_ended: 'Ολοκληρώθηκε!',
            page_not_found_title: 'Η σελίδα δεν βρέθηκε',
            page_not_found_message: 'Συγγνώμη, η σελίδα που ψάχνετε δεν μπόρεσε να φορτωθεί.',
            discord_invite_title: '🎉 Ελάτε στην Κοινότητα μας στο Discord!',
            discord_invite_text: 'Μην χάσετε καμία συζήτηση, συμβουλή ή ανακοίνωση! Ελάτε στον server μας στο Discord για να συνομιλήσετε με άλλους ενθουσιώδεις χρήστες και να λάβετε ζωντανή βοήθεια.',
            discord_join_button: 'Εγγραφή στο Discord',
            timers_influencer_trap: 'Παγίδα επιρροής',
            koh_guide_title: '👑 Οδηγός Στρατηγικής: Βασιλιάς του Λόφου (KoH)',
            koh_intro: 'Αυτός ο οδηγός περιγράφει τη στρατηγική για το γεγονός Βασιλιάς του Λόφου (KoH), ένα γεγονός 60 λεπτών χωρισμένο σε 3 στάδια των 20 λεπτών το καθένα.',
            koh_plan_title: 'Αρχικό Σχέδιο: Βασιλιάς του Λόφου (Κυριακή 18.08)',
            koh_plan_info: 'Το σχέδιο αναθέτει ομάδες σε συγκεκριμένες θέσεις με αρχηγούς και μέλη.',
            koh_leader_a: 'Αρχηγός Α (Κέντρο)',
            koh_leader_b: 'Αρχηγός Β (Αριστερά)',
            koh_leader_c: 'Αρχηγός Γ (Δεξιά)',
            koh_stage1_title: 'Στάδιο 1: Κατάληψη Εδάφους (20 λεπτά)',
            koh_stage1_obj: 'Στόχος:',
            koh_stage1_action: 'Ενέργεια:',
            koh_stage1_key: 'Βασικό Σημείο:',
            koh_stage1_note: 'Πρέπει να υπάρχουν πάντα πορείες σε όλα τα κτίρια που είναι σε επαφή με την περιοχή του αντιπάλου για να τους εμποδίσουμε να εισέλθουν και να καταλάβουν την περιοχή μας.',
            koh_stage2_title: 'Στάδιο 2: Κατάληψη Βασικών Πόλεων (20 λεπτά)',
            koh_stage2_obj: 'Στόχος:',
            koh_stage2_action: 'Ενέργεια:',
            koh_stage2_key: 'Βασικό Σημείο:',
            koh_stage2_teamA: 'Ομάδα Α: καταλαμβάνει (Α31, Α32), (Β31, Β32), (C31, C32).',
            koh_stage2_teamB: 'Ομάδα Β: καταλαμβάνει (Β31, Β32).',
            koh_stage2_teamC: 'Ομάδα Γ: καταλαμβάνει (C31, C32).',
            koh_stage2_result: 'Αυτός ο αποκλεισμός θα μας επιτρέψει να αποκλείσουμε το πέρασμα των αντιπάλων μας προς το κέντρο, και στο Στάδιο 3, δεν θα μπορούν να εισέλθουν εκεί.',
            koh_stage3_title: 'Στάδιο 3: Μάχη για το Κέντρο / Αποκλεισμός (20 λεπτά)',
            koh_stage3_obj: 'Στόχος:',
            koh_stage3_action: 'Ενέργεια:',
            koh_stage3_key: 'Βασικό Σημείο:',
            koh_stage3_last_sentence: 'Αν μπορούμε να αποκλείσουμε τα πάντα γύρω από το κέντρο, τότε μόνο λίγοι άνθρωποι θα πάνε στο κέντρο, δεν χρειάζεται να τρέξουν όλοι μαζί, καθώς ο αντίπαλος δεν θα μπορεί να εισέλθει εκεί. Παρακολουθούμε τα κτίρια γύρω από το κέντρο και δεν αφήνουμε τον αντίπαλο να περάσει.',
            koh_final_phase_title: 'Τελική Φάση (Τελευταία 20 λεπτά)',
            koh_final_phase_text: 'Κατά τα τελευταία 20 λεπτά, θα πολεμήσουμε σε όλα τα κτίρια στον χάρτη και θα συλλέξουμε πόντους. Η ένωση που θα συγκεντρώσει τους περισσότερους πόντους θα κερδίσει.',
            koh_bug_note: '🚨 **ΣΗΜΑΝΤΙΚΗ ΣΗΜΕΙΩΣΗ:** Υπάρχουν σφάλματα στο παιχνίδι σχετικά με την ακριβή ώρα του γεγονότος. Παρακαλούμε να είστε συνδεδεμένοι στις **12:00 UTC** για να είστε έτοιμοι.',
            koh_questions_pm: 'Αν έχετε οποιεσδήποτε ερωτήσεις σχετικά με αυτό το γεγονός, μπορείτε να μου τις ρωτήσετε σε ιδιωτικό μήνυμα.'
        }
    };

    // Flags for the language menu (matching data-lang attributes)
    const languageFlags = {
        fr: '🇫🇷',
        en: '🇬🇧',
        ko: '🇰🇷',
        it: '🇮🇹',
        es: '🇪🇸',
        ru: '🇷🇺',
        zh: '🇨🇳',
        ja: '🇯🇵',
        el: '🇬🇷',
    };

    let currentLang = localStorage.getItem('lang') || 'fr'; // Default to French
    let currentTheme = localStorage.getItem('theme') || 'night'; // Default to night mode

    const mainContentArea = document.getElementById('main-content-area');
    const langToggleButton = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const currentLangFlag = document.getElementById('current-lang-flag');
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsMenu = document.getElementById('settings-menu');
    const themeDayModeButton = document.getElementById('theme-day-mode');
    const themeNightModeButton = document.getElementById('theme-night-mode');
    const backToTopButton = document.getElementById('back-to-top');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // --- Core Functions ---

    /**
     * Applies the current language translations to the page.
     * @param {string} lang - The language code (e.g., 'fr', 'en').
     */
    function setLanguage(lang) {
        document.documentElement.lang = lang; // Set HTML lang attribute
        currentLang = lang;
        localStorage.setItem('lang', lang); // Save preference

        // Update current language flag in the button, fallback to empty if flag not found
        currentLangFlag.textContent = languageFlags[lang] || '';

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            // Use optional chaining with fallback to handle cases where translation might be missing
            const translation = translations[lang]?.[key];

            if (translation !== undefined) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Specific updates for hardcoded elements or dynamically loaded content placeholders
        const searchInput = document.querySelector('.search-bar input');
        if (searchInput) {
            searchInput.placeholder = translations[lang]?.search_placeholder || 'Search for a guide or character...';
        }

        // Update settings menu button texts
        if (themeDayModeButton) themeDayModeButton.textContent = translations[lang]?.day_mode || '☀️ Day Mode';
        if (themeNightModeButton) themeNightModeButton.textContent = translations[lang]?.night_mode || '🌙 Night Mode';

        // Re-initialize dynamic content if already loaded to apply new translations
        // This is crucial if dynamic content includes translatable strings
        // Check content of main content area to decide what needs re-initializing
        // For simplicity, we trigger loadTimersContent if timers are likely present.
        // For other dynamic content (guides, characters), init functions are called in loadPage itself.
        if (mainContentArea.querySelector('#timers-container')) {
             loadTimersContent(); // Reloads timers with new language
        }
    }

    /**
     * Loads content for a specific page dynamically via Fetch API.
     * @param {string} pageName - The name of the page to load (e.g., 'home', 'guides').
     * @param {string} [subPageName] - Optional. Specific sub-page/character ID if applicable (e.g., 'rusty').
     */
    async function loadPage(pageName, subPageName = null) {
        let contentHtml = '';

        // Update active class for sidebar links
        document.querySelectorAll('.sidebar-nav ul li a').forEach(link => {
            link.classList.remove('active');
            // Ensure parent dropdowns are closed and inactive unless directly clicked
            const parentDropdown = link.closest('.dropdown');
            if (parentDropdown && parentDropdown.querySelector('.dropdown-menu').classList.contains('visible') && !link.classList.contains('dropdown-toggle')) {
                 parentDropdown.querySelector('.dropdown-menu').classList.remove('visible');
                 // Only remove 'active' from the toggle itself if not the one clicked
                 if(parentDropdown.querySelector('.dropdown-toggle').id !== link.id) {
                     parentDropdown.querySelector('.dropdown-toggle').classList.remove('active');
                 }
            }
        });

        // Set active class for the current link
        const currentActiveLink = document.querySelector(`.sidebar-nav a[data-page="${pageName}"]${subPageName ? `[data-sub-page="${subPageName}"]` : ':not([data-sub-page])'}`);
        if (currentActiveLink) {
            currentActiveLink.classList.add('active');
            // If it's a sub-page, ensure its parent dropdown is also active/expanded
            const parentDropdown = currentActiveLink.closest('.dropdown');
            if (parentDropdown) {
                const parentToggle = parentDropdown.querySelector('.dropdown-toggle');
                if (parentToggle) {
                    parentToggle.classList.add('active');
                    parentDropdown.querySelector('.dropdown-menu').classList.add('visible'); // Ensure sub-menu is open
                }
            }
        }
         // Handle logo link active state
        if (pageName === 'home') {
            document.querySelector('.top-header .logo a').classList.add('active');
        } else {
            document.querySelector('.top-header .logo a').classList.remove('active');
        }


        // Fetch content based on pageName
        try {
            // Fetch the HTML snippet for the chosen page
            const response = await fetch(`${pageName}.html`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            contentHtml = await response.text();
        } catch (error) {
            console.error(`Could not load page ${pageName}.html:`, error);
            // Display a user-friendly error message, translated
            mainContentArea.innerHTML = `<section class="container content-section"><h2>${translations[currentLang]?.page_not_found_title || 'Page Not Found'}</h2><p>${translations[currentLang]?.page_not_found_message || 'Sorry, the page you are looking for could not be loaded.'}</p></section>`;
            setLanguage(currentLang); // Ensure error message is translated
            return;
        }

        // Inject content and apply translations
        mainContentArea.innerHTML = contentHtml;
        setLanguage(currentLang); // Apply translations to the newly loaded content

        // Post-load initialization for specific page types
        if (pageName === 'timers') {
            loadTimersContent(); // Activate timer logic
        } else if (pageName === 'guides') {
            initGuideAccordions(); // Initialize accordion functionality
        } else if (pageName === 'guides-koh') { // Special handling for KoH guide page
            // If KoH guide is loaded, it might have its own accordion-like sections
            // Or specific elements needing JS initialization
            // For now, no specific init needed beyond translation
             // If there's content inside koh_guide, you might call initGuideAccordions();
        }
        else if (pageName === 'characters') {
            // Scroll to specific character if subPageName is provided
            if (subPageName) {
                const targetCharacter = document.getElementById(`character-${subPageName}`);
                if (targetCharacter) {
                    targetCharacter.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        }

        // Re-attach event listeners for dynamically loaded content here
        // This is key for buttons like "Découvrir les guides" on home.html
        document.querySelectorAll('#main-content-area [data-page]').forEach(dynamicLink => {
            // Only attach if it's not a direct external link (like Discord button)
            // AND if it doesn't already have an internal href for a different purpose (like anchor links for characters)
            if (!dynamicLink.classList.contains('discord-button')) { // Exclude Discord button
                dynamicLink.removeEventListener('click', handleDynamicPageLinkClick); // Prevent duplicates
                dynamicLink.addEventListener('click', handleDynamicPageLinkClick);
            }
        });


        // Update URL for navigation history (allows back/forward buttons)
        const newUrl = subPageName ? `?page=${pageName}#${subPageName}` : `?page=${pageName}`;
        history.pushState({ page: pageName, subPage: subPageName }, '', newUrl);

        // Close sidebar on mobile after navigation
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }

    /** Handle clicks on dynamically loaded links with data-page attribute. */
    function handleDynamicPageLinkClick(e) {
        e.preventDefault(); // Prevent default link behavior
        const page = e.currentTarget.dataset.page;
        const subPage = e.currentTarget.dataset.subPage || null;
        loadPage(page, subPage);
    }


    /**
     * Initializes accordion functionality for guide sections.
     * Needs to be called whenever guides.html content is loaded.
     */
    function initGuideAccordions() {
        document.querySelectorAll('.guide-toggle').forEach(button => {
            // Ensure no duplicate event listeners
            button.removeEventListener('click', handleGuideToggleClick);
            button.addEventListener('click', handleGuideToggleClick);
        });
    }

    /** Handles clicks on guide accordion buttons. */
    function handleGuideToggleClick() {
        const targetId = this.dataset.target;
        const targetContent = document.getElementById(targetId);

        if (targetContent) {
            // Close other open guide sections to make it an accordion
            document.querySelectorAll('.guide-content.visible').forEach(openContent => {
                if (openContent.id !== targetId) { // If it's not the currently clicked section
                    openContent.classList.remove('visible');
                    const correspondingButton = document.querySelector(`.guide-toggle[data-target="${openContent.id}"]`);
                    if (correspondingButton) {
                        correspondingButton.setAttribute('aria-expanded', 'false');
                    }
                }
            });

            // Toggle visibility of the clicked section
            targetContent.classList.toggle('visible');
            // Update aria-expanded for accessibility
            const isVisible = targetContent.classList.contains('visible');
            this.setAttribute('aria-expanded', isVisible);
        }
    }

    /**
     * Loads dynamic timer content into the timers container and starts countdowns.
     * Should be called when timers.html is loaded.
     */
    function loadTimersContent() {
        const timersContainer = document.getElementById('timers-container');
        if (timersContainer) {
            // Clear previous timers if any, display loading message
            timersContainer.innerHTML = `<p data-key="timers_loading">${translations[currentLang]?.timers_loading || 'Loading timers...'}</p>`;

            // Simulate loading with a small delay
            setTimeout(() => {
                timersContainer.innerHTML = `
                    <div class="timer-item card">
                        <h4>⏰ ${translations[currentLang]?.timers_daily_event || 'Daily Event'} : ${translations[currentLang]?.timers_infected_hunt || 'Infected Hunt'}</h4>
                        <p>${translations[currentLang]?.timers_next_in || 'Next in'} : <span class="countdown" data-time="2025-06-24T18:00:00">Chargement...</span></p>
                    </div>
                    <div class="timer-item card">
                        <h4>🌟 ${translations[currentLang]?.timers_weekly_event || 'Weekly Event'} : ${translations[currentLang]?.timers_alliance_war || 'Alliance War'}</h4>
                        <p>${translations[currentLang]?.timers_start_in || 'Starts in'} : <span class="countdown" data-time="2025-06-26T10:00:00">Chargement...</span></p>
                    </div>
                    <div class="timer-item card">
                        <h4>🔥 ${translations[currentLang]?.timers_influencer_trap || 'Influencer Trap'}</h4>
                        <p>${translations[currentLang]?.timers_next_in || 'Next in'} : <span class="countdown" data-time="2025-06-25T14:00:00">Chargement...</span></p>
                    </div>
                    <div class="timer-item card">
                        <h4>🏆 ${translations[currentLang]?.timers_special_event || 'Special Event'} : ${translations[currentLang]?.timers_state_championship || 'State Championship'}</h4>
                        <p>${translations[currentLang]?.timers_end_in || 'Ends in'} : <span class="countdown" data-time="2025-06-25T23:59:59">Chargement...</span></p>
                    </div>
                `;
                updateCountdowns(); // Initial update
                // Ensure interval is only set once to avoid multiple timers
                if (window.countdownInterval) { // Clear existing interval if present
                    clearInterval(window.countdownInterval);
                }
                window.countdownInterval = setInterval(updateCountdowns, 1000); // Start new interval
            }, 500);
        } else {
            // If timersContainer does not exist (e.g., navigated away from timers page)
            if (window.countdownInterval) {
                clearInterval(window.countdownInterval); // Stop the interval
                window.countdownInterval = null;
            }
        }
    }

    // Function to update countdowns (defined globally to be accessible after dynamic content load)
    function updateCountdowns() {
        document.querySelectorAll('.countdown').forEach(countdownElement => {
            const targetTime = new Date(countdownElement.dataset.time).getTime();
            const now = new Date().getTime(); // Current client time
            const distance = targetTime - now;

            if (distance < 0) {
                countdownElement.textContent = translations[currentLang]?.timers_ended || 'Terminé !';
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

    /**
     * Sets the theme (day/night mode).
     * @param {string} mode - 'day' or 'night'.
     */
    function setTheme(mode) {
        if (mode === 'day') {
            document.body.classList.add('light-mode');
            currentTheme = 'day';
        } else {
            document.body.classList.remove('light-mode');
            currentTheme = 'night';
        }
        localStorage.setItem('theme', mode);
    }

    // --- Event Listeners and Initializations ---

    // Initialize language and theme from localStorage
    setLanguage(currentLang);
    setTheme(currentTheme);

    // Initial page load based on URL or default to 'home'
    const params = new URLSearchParams(window.location.search);
    const initialPage = params.get('page') || 'home';
    const initialSubPage = window.location.hash ? window.location.hash.substring(1) : null;
    loadPage(initialPage, initialSubPage);

    // Sidebar navigation click handler for main pages
    document.querySelectorAll('.sidebar-nav > ul > li > a[data-page]:not([data-sub-page]):not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page;
            loadPage(page);
        });
    });

    // Sidebar navigation click handler for character sub-pages AND KoH guide link
    document.querySelectorAll('.sidebar-nav ul li ul.dropdown-menu li a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page;
            const subPage = e.currentTarget.dataset.subPage || null; // Will be null for guides-koh link
            loadPage(page, subPage);
        });
    });

    // Handle guides dropdown toggle click
    const guidesDropdownToggle = document.getElementById('guides-dropdown-toggle');
    const guidesDropdownMenu = document.getElementById('guides-dropdown-menu');

    if (guidesDropdownToggle && guidesDropdownMenu) {
        guidesDropdownToggle.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            guidesDropdownMenu.classList.toggle('visible');
            guidesDropdownToggle.classList.toggle('active');
            const isVisible = guidesDropdownMenu.classList.contains('visible');
            guidesDropdownToggle.setAttribute('aria-expanded', isVisible);
        });
    }


    // Logo click handler (navigates to home page)
    document.querySelector('.top-header .logo a').addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('home');
    });

    // Language switcher logic
    langToggleButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling up and closing menu
        langMenu.classList.toggle('visible');
        langToggleButton.setAttribute('aria-expanded', langMenu.classList.contains('visible'));
        settingsMenu.classList.remove('visible'); // Close settings if language opens
        settingsToggle.setAttribute('aria-expanded', 'false');
    });

    langMenu.querySelectorAll('li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = e.target.dataset.lang;
            if (newLang) {
                setLanguage(newLang);
                langMenu.classList.remove('visible'); // Hide menu after selection
                langToggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Settings menu logic
    settingsToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsMenu.classList.toggle('visible');
        settingsToggle.setAttribute('aria-expanded', settingsMenu.classList.contains('visible'));
        langMenu.classList.remove('visible'); // Close language if settings opens
        langToggleButton.setAttribute('aria-expanded', 'false');
    });

    themeDayModeButton.addEventListener('click', () => {
        setTheme('day');
        settingsMenu.classList.remove('visible');
        settingsToggle.setAttribute('aria-expanded', 'false');
    });

    themeNightModeButton.addEventListener('click', () => {
        setTheme('night');
        settingsMenu.classList.remove('visible');
        settingsToggle.setAttribute('aria-expanded', 'false');
    });

    // Close all dropdown menus (language, settings) and sidebar when clicking anywhere else on the document
    document.addEventListener('click', (e) => {
        // Close language menu
        if (!langMenu.contains(e.target) && !langToggleButton.contains(e.target)) {
            langMenu.classList.remove('visible');
            langToggleButton.setAttribute('aria-expanded', 'false');
        }
        // Close settings menu
        if (!settingsMenu.contains(e.target) && !settingsToggle.contains(e.target)) {
            settingsMenu.classList.remove('visible');
            settingsToggle.setAttribute('aria-expanded', 'false');
        }
        // Close sidebar on mobile
        if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
        // Close characters dropdown if open
        const charactersDropdownMenu = document.getElementById('characters-dropdown-menu');
        const charactersDropdownToggle = document.getElementById('characters-dropdown-toggle');
        if (charactersDropdownMenu && charactersDropdownToggle && charactersDropdownMenu.classList.contains('visible')) {
            if (!charactersDropdownMenu.contains(e.target) && !charactersDropdownToggle.contains(e.target)) {
                charactersDropdownMenu.classList.remove('visible');
                charactersDropdownToggle.classList.remove('active');
                charactersDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        }
        // Close guides dropdown if open
        if (guidesDropdownMenu && guidesDropdownToggle && guidesDropdownMenu.classList.contains('visible')) {
             if (!guidesDropdownMenu.contains(e.target) && !guidesDropdownToggle.contains(e.target)) {
                guidesDropdownMenu.classList.remove('visible');
                guidesDropdownToggle.classList.remove('active');
                guidesDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });


    // Back to top button (already in previous script, ensure it's still there)
    // Hamburger menu toggle (already in previous script)
    // Characters dropdown toggle (already in previous script)

    // Handle browser history (back/forward buttons) for SPA behavior
    window.addEventListener('popstate', (event) => {
        const page = event.state ? event.state.page : 'home';
        const subPage = event.state ? event.state.subPage : null;
        loadPage(page, subPage);
    });
});

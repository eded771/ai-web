document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const siteTitle = document.getElementById('site-title');
    const siteSubtitle = document.getElementById('site-subtitle');
    const langButton = document.getElementById('lang-switcher-button');
    const searchBar = document.getElementById('search-bar');
    
    const topAiTitle = document.getElementById('top-ai-title');
    const topAiContainer = document.getElementById('top-ai-container');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const allAisTitle = document.getElementById('all-ais-title');
    const aiContainer = document.getElementById('ai-container');

    // --- State ---
    let currentLang = 'en';
    let allAiData = [];

    // --- Translations ---
    const translations = {
        en: {
            title: 'Discover the Top AI Tools', 
            subtitle: 'Your guide to the world of Artificial Intelligence', 
            search_placeholder: 'Search for an AI...', 
            lang_button: 'Language', 
            all_category: 'All', 
            top_20_overall: 'Top 20 AI Overall', 
            top_20_in_category: 'Top 20 in',
            all_ai_tools: 'All AI Tools',
            categories: {
                'Text Generation': 'Text Generation', 'Image Generation': 'Image Generation', 'Video Generation': 'Video Generation', 'Audio / Music Generation': 'Audio / Music Generation', 'Voice AI / Speech': 'Voice AI / Speech', 'AI Chatbots': 'AI Chatbots', 'AI Coding Assistants': 'AI Coding Assistants', 'AI Translation': 'AI Translation', 'AI Writing Assistants': 'AI Writing Assistants', 'AI Design Tools': 'AI Design Tools', 'AI Presentation Tools': 'AI Presentation Tools', 'AI Marketing Tools': 'AI Marketing Tools', 'AI SEO Tools': 'AI SEO Tools', 'AI Data Analysis': 'AI Data Analysis', 'AI Research Tools': 'AI Research Tools', 'AI Education / Learning': 'AI Education / Learning', 'AI Productivity Tools': 'AI Productivity Tools', 'AI Automation Agents': 'AI Automation Agents', 'AI 3D Generation': 'AI 3D Generation', 'AI Business Tools': 'AI Business Tools'
            }
        },
        ko: {
            title: '최고의 AI 도구들을 만나보세요', 
            subtitle: '인공지능 세계로의 안내자', 
            search_placeholder: 'AI 검색...', 
            lang_button: '언어', 
            all_category: '전체', 
            top_20_overall: '전체 Top 20 AI', 
            top_20_in_category: 'Top 20',
            all_ai_tools: '모든 AI 도구',
            categories: {
                'Text Generation': '텍스트 생성', 'Image Generation': '이미지 생성', 'Video Generation': '영상 생성', 'Audio / Music Generation': '오디오/음악 생성', 'Voice AI / Speech': '음성 AI/스피치', 'AI Chatbots': 'AI 챗봇', 'AI Coding Assistants': 'AI 코딩 어시스턴트', 'AI Translation': 'AI 번역', 'AI Writing Assistants': 'AI 글쓰기 도우미', 'AI Design Tools': 'AI 디자인 도구', 'AI Presentation Tools': 'AI 프레젠테이션 도구', 'AI Marketing Tools': 'AI 마케팅 도구', 'AI SEO Tools': 'AI SEO 도구', 'AI Data Analysis': 'AI 데이터 분석', 'AI Research Tools': 'AI 리서치 도구', 'AI Education / Learning': 'AI 교육/학습', 'AI Productivity Tools': 'AI 생산성 도구', 'AI Automation Agents': 'AI 자동화 에이전트', 'AI 3D Generation': 'AI 3D 생성', 'AI Business Tools': 'AI 비즈니스 도구'
            }
        },
        ja: {
            title: 'トップAIツールを発見する',
            subtitle: '人工知能の世界へのガイド',
            search_placeholder: 'AIを検索...',
            lang_button: '言語',
            all_category: 'すべて',
            top_20_overall: '総合トップ20 AI',
            top_20_in_category: 'トップ20',
            all_ai_tools: 'すべてのAIツール',
            categories: {
                'Text Generation': 'テキスト生成', 'Image Generation': '画像生成', 'Video Generation': '動画生成', 'Audio / Music Generation': '音声・音楽生成', 'Voice AI / Speech': '音声AI・スピーチ', 'AI Chatbots': 'AIチャットボット', 'AI Coding Assistants': 'AIコーディングアシスタント', 'AI Translation': 'AI翻訳', 'AI Writing Assistants': 'AIライティングアシスタント', 'AI Design Tools': 'AIデザインツール', 'AI Presentation Tools': 'AIプレゼンテーションツール', 'AI Marketing Tools': 'AIマーケティングツール', 'AI SEO Tools': 'AI SEOツール', 'AI Data Analysis': 'AIデータ分析', 'AI Research Tools': 'AIリサーチツール', 'AI Education / Learning': 'AI教育・学習', 'AI Productivity Tools': 'AI生産性ツール', 'AI Automation Agents': 'AI自動化エージェント', 'AI 3D Generation': 'AI 3D生成', 'AI Business Tools': 'AIビジネスツール'
            }
        },
        zh: {
            title: '发现顶级AI工具',
            subtitle: '您的人工智能世界指南',
            search_placeholder: '搜索AI...',
            lang_button: '语言',
            all_category: '全部',
            top_20_overall: 'AI总排名前20',
            top_20_in_category: '前20名',
            all_ai_tools: '所有AI工具',
            categories: {
                'Text Generation': '文本生成', 'Image Generation': '图像生成', 'Video Generation': '视频生成', 'Audio / Music Generation': '音频/音乐生成', 'Voice AI / Speech': '语音AI/演讲', 'AI Chatbots': 'AI聊天机器人', 'AI Coding Assistants': 'AI编码助手', 'AI Translation': 'AI翻译', 'AI Writing Assistants': 'AI写作助手', 'AI Design Tools': 'AI设计工具', 'AI Presentation Tools': 'AI演示工具', 'AI Marketing Tools': 'AI营销工具', 'AI SEO Tools': 'AI SEO工具', 'AI Data Analysis': 'AI数据分析', 'AI Research Tools': 'AI研究工具', 'AI Education / Learning': 'AI教育/学习', 'AI Productivity Tools': 'AI生产力工具', 'AI Automation Agents': 'AI自动化代理', 'AI 3D Generation': 'AI 3D生成', 'AI Business Tools': 'AI业务工具'
            }
        },
        hi: {
            title: 'शीर्ष AI उपकरणों की खोज करें',
            subtitle: 'कृत्रिम बुद्धिमत्ता की दुनिया के लिए आपकी मार्गदर्शिका',
            search_placeholder: 'AI खोजें...',
            lang_button: 'भाषा',
            all_category: 'सभी',
            top_20_overall: 'कुल मिलाकर शीर्ष 20 AI',
            top_20_in_category: 'शीर्ष 20 में',
            all_ai_tools: 'सभी AI उपकरण',
            categories: {
                'Text Generation': 'टेक्स्ट जनरेशन', 'Image Generation': 'इमेज जनरेशन', 'Video Generation': 'वीडियो जनरेशन', 'Audio / Music Generation': 'ऑडियो/संगीत जनरेशन', 'Voice AI / Speech': 'वॉयस AI/स्पीच', 'AI Chatbots': 'AI चैटबॉट', 'AI Coding Assistants': 'AI कोडिंग असिस्टेंट', 'AI Translation': 'AI अनुवाद', 'AI Writing Assistants': 'AI लेखन सहायक', 'AI Design Tools': 'AI डिजाइन उपकरण', 'AI Presentation Tools': 'AI प्रेजेंटेशन उपकरण', 'AI Marketing Tools': 'AI मार्केटिंग उपकरण', 'AI SEO Tools': 'AI SEO उपकरण', 'AI Data Analysis': 'AI डेटा विश्लेषण', 'AI Research Tools': 'AI अनुसंधान उपकरण', 'AI Education / Learning': 'AI शिक्षा/सीखना', 'AI Productivity Tools': 'AI उत्पादकता उपकरण', 'AI Automation Agents': 'AI ऑटोमेशन एजेंट', 'AI 3D Generation': 'AI 3D जनरेशन', 'AI Business Tools': 'AI व्यापार उपकरण'
            }
        },
        es: {
            title: 'Descubra las mejores herramientas de IA',
            subtitle: 'Su guía para el mundo de la Inteligencia Artificial',
            search_placeholder: 'Buscar una IA...',
            lang_button: 'Idioma',
            all_category: 'Todo',
            top_20_overall: 'Top 20 IA en general',
            top_20_in_category: 'Top 20 en',
            all_ai_tools: 'Todas las herramientas de IA',
            categories: {
                'Text Generation': 'Generación de texto', 'Image Generation': 'Generación de imágenes', 'Video Generation': 'Generación de video', 'Audio / Music Generation': 'Generación de audio/música', 'Voice AI / Speech': 'IA de voz/habla', 'AI Chatbots': 'Chatbots de IA', 'AI Coding Assistants': 'Asistentes de codificación de IA', 'AI Translation': 'Traducción de IA', 'AI Writing Assistants': 'Asistentes de escritura de IA', 'AI Design Tools': 'Herramientas de diseño de IA', 'AI Presentation Tools': 'Herramientas de presentación de IA', 'AI Marketing Tools': 'Herramientas de marketing de IA', 'AI SEO Tools': 'Herramientas de SEO de IA', 'AI Data Analysis': 'Análisis de datos de IA', 'AI Research Tools': 'Herramientas de investigación de IA', 'AI Education / Learning': 'IA para educación/aprendizaje', 'AI Productivity Tools': 'Herramientas de productividad de IA', 'AI Automation Agents': 'Agentes de automatización de IA', 'AI 3D Generation': 'Generación 3D de IA', 'AI Business Tools': 'Herramientas de negocio de IA'
            }
        },
        fr: {
            title: 'Découvrez les meilleurs outils d’IA',
            subtitle: 'Votre guide dans le monde de l’intelligence artificielle',
            search_placeholder: 'Rechercher une IA...',
            lang_button: 'Langue',
            all_category: 'Tout',
            top_20_overall: 'Top 20 des IA en général',
            top_20_in_category: 'Top 20 en',
            all_ai_tools: 'Tous les outils d’IA',
            categories: {
                'Text Generation': 'Génération de texte', 'Image Generation': 'Génération d\'images', 'Video Generation': 'Génération de vidéos', 'Audio / Music Generation': 'Génération audio/musique', 'Voice AI / Speech': 'IA vocale/parole', 'AI Chatbots': 'Chatbots IA', 'AI Coding Assistants': 'Assistants de codage IA', 'AI Translation': 'Traduction IA', 'AI Writing Assistants': 'Assistants d\'écriture IA', 'AI Design Tools': 'Outils de conception IA', 'AI Presentation Tools': 'Outils de présentation IA', 'AI Marketing Tools': 'Outils de marketing IA', 'AI SEO Tools': 'Outils de référencement IA', 'AI Data Analysis': 'Analyse de données IA', 'AI Research Tools': 'Outils de recherche IA', 'AI Education / Learning': 'IA pour l’éducation/apprentissage', 'AI Productivity Tools': 'Outils de productivité IA', 'AI Automation Agents': 'Agents d\'automatisation IA', 'AI 3D Generation': 'Génération 3D IA', 'AI Business Tools': 'Outils commerciaux IA'
            }
        },
        ar: {
            title: 'اكتشف أفضل أدوات الذكاء الاصطناعي',
            subtitle: 'دليلك إلى عالم الذكاء الاصطناعي',
            search_placeholder: 'ابحث عن ذكاء اصطناعي...',
            lang_button: 'لغة',
            all_category: 'الكل',
            top_20_overall: 'أفضل 20 أداة ذكاء اصطناعي بشكل عام',
            top_20_in_category: 'أفضل 20 في',
            all_ai_tools: 'جميع أدوات الذكاء الاصطناعي',
            categories: {
                'Text Generation': 'توليد النصوص', 'Image Generation': 'توليد الصور', 'Video Generation': 'توليد الفيديو', 'Audio / Music Generation': 'توليد الصوت/الموسيقى', 'Voice AI / Speech': 'الذكاء الاصطناعي الصوتي/الكلام', 'AI Chatbots': 'روبوتات الدردشة بالذكاء الاصطناعي', 'AI Coding Assistants': 'مساعدو البرمجة بالذكاء الاصطناعي', 'AI Translation': 'الترجمة بالذكاء الاصطناعي', 'AI Writing Assistants': 'مساعدو الكتابة بالذكاء الاصطناعي', 'AI Design Tools': 'أدوات التصميم بالذكاء الاصطناعي', 'AI Presentation Tools': 'أدوات العروض التقديمية بالذكاء الاصطناعي', 'AI Marketing Tools': 'أدوات التسويق بالذكاء الاصطناعي', 'AI SEO Tools': 'أدوات تحسين محركات البحث بالذكاء الاصطناعي', 'AI Data Analysis': 'تحليل البيانات بالذكاء الاصطناعي', 'AI Research Tools': 'أدوات البحث بالذكاء الاصطناعي', 'AI Education / Learning': 'الذكاء الاصطناعي للتعليم/التعلم', 'AI Productivity Tools': 'أدوات الإنتاجية بالذكاء الاصطناعي', 'AI Automation Agents': 'وكلاء الأتمتة بالذكاء الاصطناعي', 'AI 3D Generation': 'توليد ثلاثي الأبعاد بالذكاء الاصطناعي', 'AI Business Tools': 'أدوات الأعمال بالذكاء الاصطناعي'
            }
        },
        bn: {
            title: 'শীর্ষ এআই সরঞ্জামগুলি আবিষ্কার করুন',
            subtitle: 'কৃত্রিম বুদ্ধিমত্তার জগতে আপনার গাইড',
            search_placeholder: 'একটি এআই অনুসন্ধান করুন...',
            lang_button: 'ভাষা',
            all_category: 'সব',
            top_20_overall: 'সামগ্রিকভাবে শীর্ষ 20 এআই',
            top_20_in_category: 'শীর্ষ 20 এর মধ্যে',
            all_ai_tools: 'সমস্ত এআই সরঞ্জাম',
            categories: {
                'Text Generation': 'টেক্সট জেনারেশন', 'Image Generation': 'ইমেজ জেনারেশন', 'Video Generation': 'ভিডিও জেনারেশন', 'Audio / Music Generation': 'অডিও/মিউজিক জেনারেশন', 'Voice AI / Speech': 'ভয়েস এআই/স্পিচ', 'AI Chatbots': 'এআই চ্যাটবট', 'AI Coding Assistants': 'এআই কোডিং সহকারী', 'AI Translation': 'এআই অনুবাদ', 'AI Writing Assistants': 'এআই লেখা সহকারী', 'AI Design Tools': 'এআই ডিজাইন সরঞ্জাম', 'AI Presentation Tools': 'এআই উপস্থাপনা সরঞ্জাম', 'AI Marketing Tools': 'এআই মার্কেটিং সরঞ্জাম', 'AI SEO Tools': 'এআই এসইও সরঞ্জাম', 'AI Data Analysis': 'এআই ডেটা বিশ্লেষণ', 'AI Research Tools': 'এআই গবেষণা সরঞ্জাম', 'AI Education / Learning': 'এআই শিক্ষা/লার্নিং', 'AI Productivity Tools': 'এআই প্রোডাক্টিভিটি সরঞ্জাম', 'AI Automation Agents': 'এআই অটোমেশন এজেন্ট', 'AI 3D Generation': 'এআই 3ডি জেনারেশন', 'AI Business Tools': 'এআই ব্যবসা সরঞ্জাম'
            }
        },
        ru: {
            title: 'Откройте для себя лучшие инструменты ИИ',
            subtitle: 'Ваш гид в мир искусственного интеллекта',
            search_placeholder: 'Искать ИИ...',
            lang_button: 'Язык',
            all_category: 'Все',
            top_20_overall: 'Топ-20 ИИ в целом',
            top_20_in_category: 'Топ-20 в',
            all_ai_tools: 'Все инструменты ИИ',
            categories: {
                'Text Generation': 'Генерация текста', 'Image Generation': 'Генерация изображений', 'Video Generation': 'Генерация видео', 'Audio / Music Generation': 'Генерация аудио/музыки', 'Voice AI / Speech': 'Голосовой ИИ/речь', 'AI Chatbots': 'Чат-боты ИИ', 'AI Coding Assistants': 'Помощники по кодированию ИИ', 'AI Translation': 'ИИ-перевод', 'AI Writing Assistants': 'Помощники по письму ИИ', 'AI Design Tools': 'Инструменты для дизайна ИИ', 'AI Presentation Tools': 'Инструменты для презентаций ИИ', 'AI Marketing Tools': 'Инструменты для маркетинга ИИ', 'AI SEO Tools': 'Инструменты для SEO ИИ', 'AI Data Analysis': 'Анализ данных ИИ', 'AI Research Tools': 'Инструменты для исследований ИИ', 'AI Education / Learning': 'ИИ для образования/обучения', 'AI Productivity Tools': 'Инструменты для повышения продуктивности ИИ', 'AI Automation Agents': 'Агенты автоматизации ИИ', 'AI 3D Generation': 'Генерация 3D ИИ', 'AI Business Tools': 'Бизнес-инструменты ИИ'
            }
        },
        pt: {
            title: 'Descubra as principais ferramentas de IA',
            subtitle: 'Seu guia para o mundo da Inteligência Artificial',
            search_placeholder: 'Pesquisar uma IA...',
            lang_button: 'Idioma',
            all_category: 'Todos',
            top_20_overall: 'Top 20 IA geral',
            top_20_in_category: 'Top 20 em',
            all_ai_tools: 'Todas as ferramentas de IA',
            categories: {
                'Text Generation': 'Geração de Texto', 'Image Generation': 'Geração de Imagem', 'Video Generation': 'Geração de Vídeo', 'Audio / Music Generation': 'Geração de Áudio/Música', 'Voice AI / Speech': 'IA de Voz/Fala', 'AI Chatbots': 'Chatbots de IA', 'AI Coding Assistants': 'Assistentes de Codificação de IA', 'AI Translation': 'Tradução de IA', 'AI Writing Assistants': 'Assistentes de Escrita de IA', 'AI Design Tools': 'Ferramentas de Design de IA', 'AI Presentation Tools': 'Ferramentas de Apresentação de IA', 'AI Marketing Tools': 'Ferramentas de Marketing de IA', 'AI SEO Tools': 'Ferramentas de SEO de IA', 'AI Data Analysis': 'Análise de Dados de IA', 'AI Research Tools': 'Ferramentas de Pesquisa de IA', 'AI Education / Learning': 'IA для образования/обучения', 'AI Productivity Tools': 'Ferramentas de Produtividade de IA', 'AI Automation Agents': 'Agentes de Automação de IA', 'AI 3D Generation': 'Geração 3D de IA', 'AI Business Tools': 'Ferramentas de Negócios de IA'
            }
        },
        ur: {
            title: 'ٹاپ اے آئی ٹولز دریافت کریں',
            subtitle: 'مصنوعی ذہانت کی دنیا کے لیے آپ کا رہنما',
            search_placeholder: 'اے آئی تلاش کریں...',
            lang_button: 'زبان',
            all_category: 'تمام',
            top_20_overall: 'مجموعی طور پر ٹاپ 20 اے آئی',
            top_20_in_category: 'میں ٹاپ 20',
            all_ai_tools: 'تمام اے آئی ٹولز',
            categories: {
                'Text Generation': 'متن کی تخلیق', 'Image Generation': 'تصویر کی تخلیق', 'Video Generation': 'ویڈیو کی تخلیق', 'Audio / Music Generation': 'آڈیو/موسیقی کی تخلیق', 'Voice AI / Speech': 'صوتی اے آئی/تقریر', 'AI Chatbots': 'اے آئی چیٹ بوٹس', 'AI Coding Assistants': 'اے آئی کوڈنگ اسسٹنٹس', 'AI Translation': 'اے آئی ترجمہ', 'AI Writing Assistants': 'اے آئی تحریری معاون', 'AI Design Tools': 'اے آئی ڈیزائن ٹولز', 'AI Presentation Tools': 'اے آئی پریزنٹیشن ٹولز', 'AI Marketing Tools': 'اے آئی مارکیٹنگ ٹولز', 'AI SEO Tools': 'اے آئی SEO ٹولز', 'AI Data Analysis': 'اے آئی ڈیٹا تجزیہ', 'AI Research Tools': 'اے آئی تحقیقی ٹولز', 'AI Education / Learning': 'اے آئی تعلیم/سیکھنا', 'AI Productivity Tools': 'اے آئی پیداواری ٹولز', 'AI Automation Agents': 'اے آئی آٹومATION ایجنٹس', 'AI 3D Generation': 'اے آئی 3D جنریشن', 'AI Business Tools': 'اے آئی بزنس ٹولز'
            }
        }
    };

    async function fetchAiData() {
        try {
            const response = await fetch(`ai_data.json?v=${new Date().getTime()}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            allAiData = await response.json();
            initializeApp();
        } catch (error) {
            console.error("Error fetching AI data:", error);
            aiContainer.innerHTML = '<p style="color:red; text-align:center;">Failed to load AI data. Please check the console for more details.</p>';
        }
    }

    function renderTopAi(category = 'all') {
        if (!topAiContainer) return;
        topAiContainer.innerHTML = '';
        
        const t = translations[currentLang] || translations.en;
        let dataToRank = allAiData;
        let title = t.top_20_overall;

        if (category !== 'all') {
            dataToRank = allAiData.filter(ai => ai.category === category);
            title = `${t.top_20_in_category} ${t.categories[category] || category}`;
        }

        const sortedData = [...dataToRank].sort((a, b) => a.rank - b.rank).slice(0, 20);

        topAiTitle.textContent = `${title}`;

        sortedData.forEach((ai, index) => {
            const cardLink = document.createElement('a');
            cardLink.href = ai.website;
            cardLink.className = 'ranked-card';
            cardLink.innerHTML = `
                <div class="rank-number">${index + 1}</div>
                <div class="ranked-card-content">
                    <h3>${ai.name}</h3>
                    <p>${t.categories[ai.category] || ai.category}</p>
                </div>
            `;
            topAiContainer.appendChild(cardLink);
        });
    }

    function renderCategories() {
        if (!categoryFiltersContainer) return;
        categoryFiltersContainer.innerHTML = '';
        
        const t = translations[currentLang] || translations.en;
        const allButton = document.createElement('button');
        allButton.textContent = t.all_category;
        allButton.className = 'category-filter-button active';
        allButton.dataset.category = 'all';
        categoryFiltersContainer.appendChild(allButton);

        const categoriesInCurrentLang = t.categories;
        for (const categoryKey in translations.en.categories) {
            if (Object.prototype.hasOwnProperty.call(categoriesInCurrentLang, categoryKey)) {
                const button = document.createElement('button');
                button.textContent = categoriesInCurrentLang[categoryKey];
                button.className = 'category-filter-button';
                button.dataset.category = categoryKey;
                categoryFiltersContainer.appendChild(button);
            }
        }
    }

    function renderAllAi(filter = 'all', searchTerm = '') {
        if (!aiContainer) return;
        aiContainer.innerHTML = '';
        let filteredData = allAiData;

        if (filter !== 'all') {
            filteredData = filteredData.filter(ai => ai.category === filter);
        }
        if (searchTerm) {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const t = translations[currentLang] || translations.en;
            filteredData = filteredData.filter(ai => 
                ai.name.toLowerCase().includes(lowerCaseSearchTerm) || 
                (t.categories[ai.category] || ai.category).toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        filteredData.forEach(ai => {
            const cardLink = document.createElement('a');
            cardLink.href = ai.website;
            cardLink.className = 'ai-card-link';
            
            const aiCard = document.createElement('ai-card');
            aiCard.setAttribute('name', ai.name);
            const t = translations[currentLang] || translations.en;
            aiCard.setAttribute('category', t.categories[ai.category] || ai.category);
            
            cardLink.appendChild(aiCard);
            aiContainer.appendChild(cardLink);
        });
    }

    function updateTexts() {
        const t = translations[currentLang] || translations.en;
        document.documentElement.lang = currentLang;
        siteTitle.textContent = t.title;
        siteSubtitle.textContent = t.subtitle;
        searchBar.placeholder = t.search_placeholder;
        langButton.textContent = t.lang_button;
        allAisTitle.textContent = t.all_ai_tools;
    }

    function setupEventListeners() {
        categoryFiltersContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const category = e.target.dataset.category;
                document.querySelectorAll('.category-filter-button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                
                renderTopAi(category);
                renderAllAi(category, searchBar.value);
            }
        });

        searchBar.addEventListener('input', () => {
            const activeCategory = document.querySelector('.category-filter-button.active').dataset.category;
            renderAllAi(activeCategory, searchBar.value);
        });
    
        document.getElementById('lang-switcher-options').addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const lang = e.target.dataset.lang;
                if (lang && translations[lang]) {
                    currentLang = lang;
                    updateUIForLanguageChange();
                }
            }
        });
    }

    function updateUIForLanguageChange() {
        updateTexts();
        renderCategories();
        const activeCategory = document.querySelector('.category-filter-button.active')?.dataset.category || 'all';
        renderTopAi(activeCategory);
        renderAllAi(activeCategory, searchBar.value);
        
        const newCategoryButtons = document.querySelectorAll('.category-filter-button');
        newCategoryButtons.forEach(btn => {
            if (btn.dataset.category === activeCategory) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function initializeApp() {
        updateTexts();
        renderCategories();
        renderTopAi();
        renderAllAi();
        setupEventListeners();
    }

    fetchAiData();
});

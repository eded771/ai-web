const translations = {
    en: {
        'site-title': 'Discover the Top AI Tools',
        'site-subtitle': 'Your guide to the world of Artificial Intelligence',
        'top-ai-title': 'Top 20 AI Overall',
        'all-ais-title': 'All AI Tools',
        'search-bar-placeholder': 'Search for an AI...',
        'category-all': 'All'
    },
    ko: {
        'site-title': '최고의 AI 도구들을 만나보세요',
        'site-subtitle': '인공지능의 세계로 안내합니다',
        'top-ai-title': '종합 Top 20 AI',
        'all-ais-title': '모든 AI 도구들',
        'search-bar-placeholder': 'AI를 검색해보세요...',
        'category-all': '모두'
    },
    ja: {
        'site-title': 'トップAIツールを発見',
        'site-subtitle': '人工知能の世界へのガイド',
        'top-ai-title': '総合トップ20 AI',
        'all-ais-title': 'すべてのAIツール',
        'search-bar-placeholder': 'AIを検索...',
        'category-all': 'すべて'
    },
    zh: {
        'site-title': '发现顶级的AI工具',
        'site-subtitle': '你的人工智能世界指南',
        'top-ai-title': '总排名前20的AI',
        'all-ais-title': '所有AI工具',
        'search-bar-placeholder': '搜索AI...',
        'category-all': '全部'
    },
    hi: {
        'site-title': 'शीर्ष एआई उपकरणों की खोज करें',
        'site-subtitle': 'आर्टिफिशियल इंटेलिजेंस की दुनिया के लिए आपकी मार्गदर्शिका',
        'top-ai-title': 'कुल मिलाकर शीर्ष 20 एआई',
        'all-ais-title': 'सभी एआई उपकरण',
        'search-bar-placeholder': 'एआई खोजें...',
        'category-all': 'सभी'
    },
    es: {
        'site-title': 'Descubre las Mejores Herramientas de IA',
        'site-subtitle': 'Tu guía al mundo de la Inteligencia Artificial',
        'top-ai-title': 'Top 20 IA General',
        'all-ais-title': 'Todas las Herramientas de IA',
        'search-bar-placeholder': 'Buscar una IA...',
        'category-all': 'Todos'
    },
    fr: {
        'site-title': 'Découvrez les Meilleurs Outils d'IA',
        'site-subtitle': 'Votre guide dans le monde de l'Intelligence Artificielle',
        'top-ai-title': 'Top 20 IA Global',
        'all-ais-title': 'Tous les Outils d'IA',
        'search-bar-placeholder': 'Rechercher une IA...',
        'category-all': 'Tous'
    },
    ar: {
        'site-title': 'اكتشف أفضل أدوات الذكاء الاصطناعي',
        'site-subtitle': 'دليلك إلى عالم الذكاء الاصطناعي',
        'top-ai-title': 'أفضل 20 أداة ذكاء اصطناعي بشكل عام',
        'all-ais-title': 'كل أدوات الذكاء الاصطناعي',
        'search-bar-placeholder': 'ابحث عن أداة ذكاء اصطناعي...',
        'category-all': 'الكل'
    },
    bn: {
        'site-title': 'সেরা এআই টুলগুলি আবিষ্কার করুন',
        'site-subtitle': 'কৃত্রিম বুদ্ধিমত্তার জগতে আপনার গাইড',
        'top-ai-title': 'সামগ্রিকভাবে সেরা ২০টি এআই',
        'all-ais-title': 'সমস্ত এআই টুল',
        'search-bar-placeholder': 'এআই অনুসন্ধান করুন...',
        'category-all': 'সব'
    },
    ru: {
        'site-title': 'Откройте для себя лучшие инструменты ИИ',
        'site-subtitle': 'Ваш гид в мир искусственного интеллекта',
        'top-ai-title': 'Топ-20 ИИ в целом',
        'all-ais-title': 'Все инструменты ИИ',
        'search-bar-placeholder': 'Искать ИИ...',
        'category-all': 'Все'
    },
    pt: {
        'site-title': 'Descubra as Melhores Ferramentas de IA',
        'site-subtitle': 'Seu guia para o mundo da Inteligência Artificial',
        'top-ai-title': 'Top 20 IA Geral',
        'all-ais-title': 'Todas as Ferramentas de IA',
        'search-bar-placeholder': 'Pesquisar uma IA...',
        'category-all': 'Todos'
    },
    ur: {
        'site-title': 'بہترین اے آئی ٹولز دریافت کریں',
        'site-subtitle': 'مصنوعی ذہانت کی دنیا کے لیے آپ کا رہنما',
        'top-ai-title': 'مجموعی طور پر ٹاپ 20 اے آئی',
        'all-ais-title': 'تمام اے آئی ٹولز',
        'search-bar-placeholder': 'اے آئی تلاش کریں...',
        'category-all': 'تمام'
    },
};

let allAiData = { categories: {}, ai_tools: [] };
let currentLang = 'en';

async function fetchAiData() {
    try {
        const response = await fetch('ai_data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allAiData = await response.json();
        return allAiData;
    } catch (error) {
        console.error("Could not fetch AI data:", error);
        return { categories: {}, ai_tools: [] };
    }
}

function getTranslatedCategory(categoryKey) {
    return allAiData.categories[categoryKey] ? allAiData.categories[categoryKey][currentLang] : categoryKey;
}

function createAiCard(ai, rank) {
    const card = document.createElement('ai-card');
    card.setAttribute('name', ai.name);
    card.setAttribute('category', getTranslatedCategory(ai.category_key));
    card.setAttribute('link', ai.link);
    if (rank) {
        card.setAttribute('rank', rank);
        card.classList.add('ranked');
    }
    return card;
}

function displayRankedAis(categoryKey = 'all') {
    const container = document.getElementById('top-ai-container');
    container.innerHTML = '';
    const filteredData = categoryKey === 'all' 
        ? allAiData.ai_tools 
        : allAiData.ai_tools.filter(ai => ai.category_key === categoryKey);
    const top20 = filteredData.slice(0, 20);
    top20.forEach((ai, index) => {
        const card = createAiCard(ai, index + 1);
        container.appendChild(card);
    });
}

function displayAllAis(searchTerm = '') {
    const container = document.getElementById('ai-container');
    container.innerHTML = '';
    const filteredData = allAiData.ai_tools.filter(ai => 
        ai.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    filteredData.forEach(ai => {
        const card = createAiCard(ai);
        container.appendChild(card);
    });
}

function createCategoryFilters() {
    const container = document.getElementById('category-filters');
    const categoryKeys = ['all', ...Object.keys(allAiData.categories)];
    container.innerHTML = '';

    categoryKeys.forEach(key => {
        const button = document.createElement('button');
        const buttonText = key === 'all' ? translations[currentLang]['category-all'] : getTranslatedCategory(key);
        button.textContent = buttonText;
        button.dataset.key = key;
        button.classList.add('filter-button');
        if (key === 'all') {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayRankedAis(key);
        });
        container.appendChild(button);
    });
}

function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
        displayAllAis(e.target.value);
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    // Update all UI text
    const elementsToTranslate = document.querySelectorAll('[data-lang-key]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Re-render components with translated categories
    createCategoryFilters();
    displayRankedAis(document.querySelector('.filter-button.active')?.dataset.key || 'all');
    displayAllAis(document.getElementById('search-bar').value);
}

function setupLanguageSwitcher() {
    const langSwitcher = document.getElementById('lang-switcher-dropdown');
    const langButton = document.getElementById('lang-switcher-button');
    const langOptions = document.getElementById('lang-switcher-options');

    langButton.addEventListener('click', (e) => {
        e.stopPropagation();
        langOptions.style.display = langOptions.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', () => {
        langOptions.style.display = 'none';
    });

    langOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
        }
    });
}

async function main() {
    await fetchAiData();
    setupLanguageSwitcher();
    setupSearch();
    setLanguage(currentLang); // Initial setup with default language
}

main();

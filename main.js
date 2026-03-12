document.addEventListener('DOMContentLoaded', () => {
    const categoryView = document.getElementById('category-view');
    const toolView = document.getElementById('tool-view');
    const categoryList = document.getElementById('categories');
    const toolList = document.getElementById('tools');
    const toolCategoryTitle = document.getElementById('tool-category-title');
    const backButton = document.getElementById('back-button');

    const aiData = {
        "Text Generation": [
            "1_ChatGPT", "2_Claude", "3_Gemini", "4_Grok", "5_Jasper AI", "6_Copy.ai", "7_Writesonic", "8_Rytr", "9_Sudowrite", "10_Notion AI",
            "11_QuillBot", "12_HyperWrite", "13_Wordtune", "14_Anyword", "15_Peppertype AI", "16_Scalenut", "17_TextCortex", "18_Frase AI", "19_Simplified AI", "20_Writer AI"
        ],
        "Image Generation": [
            "1_Midjourney", "2_DALL-E 3", "3_Stable Diffusion", "4_Adobe Firefly", "5_Ideogram", "6_Leonardo Ai", "7_Playground AI", "8_Bing Image Creator", "9_Canva AI", "10_NightCafe",
            "11_DreamStudio", "12_Artbreeder", "13_DeepAI", "14_StarryAI", "15_Fotor", "16_Runway ML", "17_Picsart", "18_Simplified", "19_Clipdrop", "20_Getimg.ai"
        ],
        "Video Generation": [
            "1_Sora", "2_Runway Gen-2", "3_Pika Labs", "4_Lumen5", "5_Synthesia", "6_InVideo", "7_HeyGen", "8_Pictory", "9_Veed.io", "10_FlexClip",
            "11_Deepbrain AI", "12_Elai.io", "13_Colossyan", "14_Fliki", "15_Synthesys", "16_Hour One", "17_D-ID", "18_Kapwing", "19_GliaCloud", "20_Raw Shorts"
        ],
        "Audio / Music Generation": [
            "1_Suno AI", "2_Udio", "3_Amper Music", "4_Soundraw", "5_AIVA", "6_Boomy", "7_Ecrett Music", "8_Mubert", "9_Beatoven.ai", "10_Soundful",
            "11_Endel", "12_Splash Pro", "13_Riffusion", "14_Jukebox", "15_Google MusicLM", "16_LANDR", "17_Orb Producer", "18_Magenta Studio", "19_AudioCipher", "20_LALAL.AI"
        ],
        "Voice AI / Speech": [
            "1_ElevenLabs", "2_Murf.ai", "3_Play.ht", "4_Resemble.ai", "5_Lovo.ai", "6_WellSaid Labs", "7_Descript", "8_Speechify", "9_Listnr", "10_Voicera",
            "11_Sonantic", "12_Replica Studios", "13_Ad Auris", "14_Veritone Voice", "15_Dubverse", "16_Altered Studio", "17_Voice.ai", "18_NaturalReader", "19_Trinity Audio", "20_Voiser"
        ],
        "AI Chatbots": [
            "1_ChatGPT", "2_Gemini", "3_Claude", "4_Perplexity AI", "5_Poe", "6_Character.AI", "7_You.com", "8_Phind", "9_Forefront AI", "10_HuggingChat",
            "11_Pi, your personal AI", "12_Microsoft Copilot", "13_Tidio", "14_Drift", "15_Intercom", "16_Zendesk Answer Bot", "17_LiveChat", "18_Chatfuel", "19_ManyChat", "20_Botsonic"
        ],
        "AI Coding Assistants": [
            "1_GitHub Copilot", "2_Amazon CodeWhisperer", "3_Tabnine", "4_Replit Ghostwriter", "5_Codeium", "6_Sourcegraph Cody", "7_MutableAI", "8_Cursor", "9_AskCodi", "10_Buildt",
            "11_Bugasura", "12_Hugging Face Code Autocomplete", "13_FauxPilot", "14_CodePal", "15_Blackbox.ai", "16_Visual Studio IntelliCode", "17_AI2sql", "18_QueryPal", "19_Adrenaline", "20_Safurai"
        ],
        "AI Translation": [
            "1_Google Translate", "2_DeepL", "3_Microsoft Translator", "4_Yandex Translate", "5_Amazon Translate", "6_Lingvanex", "7_Reverso", "8_MyMemory", "9_Pons", "10_Translatedict",
            "11_Systran", "12_PROMT.One", "13_Webtran", "14_Crowdin", "15_Smartling", "16_Phrase", "17_Lokalise", "18_Transifex", "19_Unbabel", "20_Pairaphrase"
        ],
        "AI Writing Assistants": [
            "1_Grammarly", "2_ProWritingAid", "3_Hemingway Editor", "4_WhiteSmoke", "5_Ginger", "6_LanguageTool", "7_Slick Write", "8_Readable", "9_PaperRater", "10_WordRake",
            "11_Textio", "12_Writer", "13_Sapling", "14_Linguix", "15_Outwrite", "16_Wordvice", "17_Trinka AI", "18_Correcto", "19_Perfect Tense", "20_Clarity"
        ],
        "AI Design Tools": [
            "1_Figma", "2_Canva", "3_Adobe Sensei", "4_Sketch", "5_InVision", "6_Uizard", "7_Khroma", "8_Designs.ai", "9_Autodraw", "10_Looka",
            "11_Microsoft Designer", "12_Fronty", "13_Galileo AI", "14_Diagram", "15_Vectr", "16_Magician for Figma", "17_Genius by Diagram", "18_Debuild", "19_AI-powered Logo Maker", "20_Beautiful.ai"
        ],
        "AI Presentation Tools": [
            "1_Beautiful.ai", "2_Tome", "3_Presentations.AI", "4_Slidebean", "5_Prezi", "6_Canva", "7_Gamma", "8_Designs.ai", "9_Pitch", "10_Slidesgo",
            "11_Decktopus", "12_Kroma.ai", "13_Simplified", "14_Powtoon", "15_Vyond", "16_Visme", "17_Mentimeter", "18_AhaSlides", "19_Genially", "20_Storydoc"
        ],
        "AI Marketing Tools": [
            "1_Jasper AI", "2_Copy.ai", "3_Surfer SEO", "4_MarketMuse", "5_Frase", "6_GrowthBar", "7_Brand24", "8_HubSpot AI", "9_Seventh Sense", "10_Optimove",
            "11_Acrolinx", "12_Phrasee", "13_Cortex", "14_Drift", "15_Persado", "16_Albert.ai", "17_Exceed.ai", "18_Zeta Global", "19_Rasa.io", "20_Blueshift"
        ],
        "AI SEO Tools": [
            "1_Surfer SEO", "2_MarketMuse", "3_Frase", "4_GrowthBar", "5_SEMrush", "6_Ahrefs", "7_Moz", "8_Clearscope", "9_NeuronWriter", "10_PageOptimizer Pro",
            "11_Diib", "12_Alli AI", "13_Outranking", "14_CanIRank", "15_RankIQ", "16_Link whisper", "17_Scalenut", "18_WriterZen", "19_Postaga", "20_Wordlift"
        ],
        "AI Data Analysis": [
            "1_Tableau", "2_Microsoft Power BI", "3_Google Cloud AI Platform", "4_Amazon SageMaker", "5_IBM Watson Studio", "6_Alteryx", "7_KNIME", "8_RapidMiner", "9_DataRobot", "10_H2O.ai",
            "11_Databricks", "12_Snowflake", "13_Qlik Sense", "14_ThoughtSpot", "15_Sisense", "16_Looker", "17_Domo", "18_Julius AI", "19_Polymer", "20_Mito"
        ],
        "AI Research Tools": [
            "1_Elicit", "2_Consensus", "3_Scite", "4_Connected Papers", "5_Semantic Scholar", "6_Iris.ai", "7_ResearchRabbit", "8_Trinka", "9_Typeset.io", "10_Sourcely",
            "11_Keenious", "12_Humata", "13_ChatPDF", "14_Inciteful", "15_Litmaps", "16_RDiscovery", "17_Scopus AI", "18_Dimensions AI", "19_Web of Science", "20_Zotero"
        ],
        "AI Education / Learning": [
            "1_Khan Academy", "2_Coursera", "3_Duolingo", "4_Quizlet", "5_Socratic by Google", "6_Brainly", "7_Carnegie Learning", "8_Gradescope", "9_Cogna", "10_Knewton",
            "11_Century Tech", "12_Squirrel AI", "13_ALEKS", "14_DreamBox Learning", "15_Fetchy", "16_Third Space Learning", "17_Querium", "18_Mika", "19_Woebot", "20_Grammarly for Education"
        ],
        "AI Productivity Tools": [
            "1_Notion AI", "2_Todoist", "3_Trello", "4_Asana", "5_Zapier", "6_IFTTT", "7_Airtable", "8_ClickUp", "9_Wrike", "10_Monday.com",
            "11_Motion", "12_Timely", "13_Clockwise", "14_SaneBox", "15_X.ai", "16_Fireflies.ai", "17_Otter.ai", "18_Krisp", "19_Brain.fm", "20_Endel"
        ],
        "AI Automation Agents": [
            "1_Zapier", "2_Make", "3_IFTTT", "4_Microsoft Power Automate", "5_UiPath", "6_Automation Anywhere", "7_Blue Prism", "8_Workato", "9_Celonis", "10_Tines",
            "11_Bardeen", "12_Axiom.ai", "13_Robomotion", "14_Hexomatic", "15_Browse AI", "16_AgentGPT", "17_Auto-GPT", "18_BabyAGI", "19_Multi-Agent Systems", "20_AI agents by Adept"
        ],
        "AI 3D Generation": [
            "1_Luma AI", "2_Meshy", "3_Spline", "4_Masterpiece Studio", "5_GET3D", "6_Point-E", "7_Shap-E", "8_Kaedim", "9_Alpha3D", "10_3DFY.ai",
            "11_DeepMotion", "12_Plask", "13_RODIN", "14_Tafi", "15_NVIDIA 3D MoMa", "16_Common Sense Machines", "17_Scenario", "18_Sloyd", "19_PrometheanAI", "20_Ponzu"
        ],
        "AI Business Tools": [
            "1_Salesforce Einstein", "2_HubSpot AI", "3_Zendesk AI", "4_Freshworks Freddy AI", "5_Oracle AI", "6_SAP Leonardo", "7_Adobe Sensei", "8_Gusto", "9_Drift", "10_Gong.io",
            "11_Chorus.ai", "12_UiPath", "13_Workday", "14_Anaplan", "15_Crayon", "16_6sense", "17_Cresta", "18_Harness", "19_DataRobot", "20_Glean"
        ]
    };

    function showCategories() {
        categoryView.style.display = 'block';
        toolView.style.display = 'none';
        categoryList.innerHTML = ''; // Clear previous list

        Object.keys(aiData).forEach(category => {
            const li = document.createElement('li');
            li.textContent = category;
            li.addEventListener('click', () => showTools(category));
            categoryList.appendChild(li);
        });
    }

    function showTools(category) {
        categoryView.style.display = 'none';
        toolView.style.display = 'block';
        toolCategoryTitle.textContent = category;
        toolList.innerHTML = ''; // Clear previous list

        const tools = aiData[category];
        if (tools && tools.length > 0) {
            tools.forEach(toolName => {
                const li = document.createElement('li');
                // Extract name from "1_ChatGPT" format
                li.textContent = toolName.replace(/^\d+_/, '').replace(/\.txt$/, '');
                toolList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No tools listed for this category yet.';
            toolList.appendChild(li);
        }
    }

    backButton.addEventListener('click', showCategories);

    // Initial load
    showCategories();
});

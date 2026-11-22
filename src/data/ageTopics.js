// Existing Grades 1–4 topics were imported from "KAO Kyrgyzstan.xlsx".
// Entries marked `adapted` are MoralEd additions for Kyrgyzstan, not KAO titles.
// Their source mapping is documented in CONTENT_SOURCES.md.
// Each title is { kg, ru, en }: the Kyrgyz title is the original from the spreadsheet,
// ru and en are translations (to be proofread by native speakers).
// `months` follows the shared September–May order in curriculumCalendar.js.
//
// Middle school (Grades 5-7) was developed to align with:
//  - The Kyrgyz Republic Education Development Program 2021-2040
//    (Gov. Decree No. 200 of 4 May 2021, cbd.minjust.gov.kg/158227) —
//    unified upbringing (tarbiya) policy, students' social-emotional development,
//    family & community involvement, digital learning, inclusion and safety;
//  - CASEL's five SEL competencies (self-awareness, self-management,
//    social awareness, relationship skills, responsible decision-making);
//  - Character.org's 11 Principles (moral, performance, intellectual, civic character);
//  - Pathways (Piermont Press) values-in-action categories: character building,
//    social harmony, personal development, responsible citizenship,
//    ethical decision-making, prevention of negative behaviors.
// kg/ru wording should be proofread by native speakers before print use.

const T = (kg, ru, en) => ({ kg, ru, en });

const teacher = T('Мугалим – экинчи ата-энем', 'Учитель – вторые родители', 'The teacher is my second parent');
const goodBad = T('Жакшы деген эмне? Жаман деген эмне?', 'Что такое хорошо? Что такое плохо?', 'What is good? What is bad?');
const routine = T('Окуучулук күндөлүк режими', 'Ежедневный режим школьника', 'A student’s daily routine');
const cleanWater = T('Таза болсоң суудай бол, баарын жууп кетирген', 'Будь чистым, как вода: она всё смывает', 'Be clean like water, which washes everything away');
const truthLies = T('Чындык жана жалган', 'Правда и ложь', 'Truth and lies');
const tidy = T('Тазалык жана тыкандык', 'Чистота и аккуратность', 'Cleanliness and tidiness');

export const AGE_PAGES = {
  'early-elementary': {
    key: 'early',
    band: 1,
    topics: [
      {
        grade: 1,
        months: [
          [
            teacher,
            T('Ата-энеңди сыйла', 'Уважай родителей', 'Respect your parents'),
            T('Жаныбарлар биздин байлык', 'Животные – наше богатство', 'Animals are our treasure'),
          ],
          [
            T('Саламдашуу адеби', 'Этикет приветствия', 'The etiquette of greeting'),
            T('Сылыктык жана одонолук', 'Вежливость и грубость', 'Politeness and rudeness'),
            T('Менин атымдын мааниси', 'Значение моего имени', 'The meaning of my name'),
          ],
          [
            T('Жоопкерчиликтүү болуу деген эмне?', 'Что значит быть ответственным?', 'What does it mean to be responsible?'),
            goodBad,
          ],
          [
            routine,
            T('Жолдо жүрүү, коопсуз жашоо тартиби', 'Правила поведения на дороге и безопасной жизни', 'Road rules and safe living'),
            T('Светофор деген эмне?', 'Что такое светофор?', 'What is a traffic light?'),
          ],
          [goodBad],
          [
            T('Гүлдөр, өсүмдүктөр – абаны тазалап турат', 'Цветы и растения очищают воздух', 'Flowers and plants keep the air clean'),
            T('Төрт мезгилдин сыры', 'Тайна четырёх времён года', 'The secret of the four seasons'),
            cleanWater,
          ],
          [
            T('Денени чыңдоо – узак өмүргө өбөлгө', 'Закаливание тела – залог долгой жизни', 'A strong body is the key to a long life'),
            T('Китеп билим кенчи', 'Книга – сокровищница знаний', 'A book is a treasure of knowledge'),
          ],
          [
            T('Билим майрамы "Салам мектеп!"', 'Праздник знаний «Здравствуй, школа!»', 'The Day of Knowledge: “Hello, School!”'),
            teacher,
          ],
          [routine, cleanWater],
        ],
      },
      {
        grade: 2,
        months: [
          [T('Эне сыйлаган – элге жагат', 'Кто уважает мать, тот мил народу', 'Whoever respects their mother is loved by the people')],
          [
            T('Сүйлөшүү маданияты', 'Культура общения', 'The culture of conversation'),
            T('Тил – адамдын күзгүсү', 'Язык – зеркало человека', 'Language is a person’s mirror'),
            T('Карысы бардын ырысы бар', 'Где есть старшие, там и благополучие', 'Where there are elders, there is blessing'),
            T('Адептүү алкыш, адепсиз каргыш алат', 'Воспитанный получает благословение, невоспитанный – проклятие', 'The well-mannered receive blessings, the ill-mannered receive curses'),
          ],
          [truthLies],
          [tidy],
          [truthLies],
          [
            T('Менин мекеним Кыргызстан', 'Моя Родина – Кыргызстан', 'My homeland is Kyrgyzstan'),
            T('Ата-Журтум, кичи мекеним', 'Моя родная земля, моя малая родина', 'My ancestral land, my small homeland'),
            T('Улуттар биримдиги – улуу байлык', 'Единство народов – великое богатство', 'The unity of nations is a great treasure'),
          ],
          [T('Билимдүү болсоң – өсөсүң, билимсиз болсоң – осолсуң', 'Образованный растёт, необразованный отстаёт', 'If you are educated you grow, if not you fall behind')],
          [T('Баатырлар эл сыймыгы', 'Богатыри – гордость народа', 'Heroes are the pride of the nation')],
          [tidy],
        ],
      },
    ],
    // Activities provided for a specific month (index into the nine months).
    activitiesMonth: 0,
  },
  'upper-elementary': {
    key: 'upper',
    band: 2,
    topics: [
      {
        grade: 3,
        months: [
          [
            T('Менин алтын бешигим', 'Моя золотая колыбель', 'My golden cradle'),
            T('Канаттууларды корго', 'Защищай птиц', 'Protect the birds'),
          ],
          [
            T('Телефондо сүйлөшүү маданияты', 'Культура разговора по телефону', 'Phone conversation etiquette'),
            T('Белек берүү маданияты', 'Культура дарения подарков', 'The culture of giving gifts'),
            T('Кыргыз маданиятынын баалуулуктары', 'Ценности кыргызской культуры', 'The values of Kyrgyz culture'),
          ],
          [T('Таарыныч, узак таарынуунун зыяны', 'Обида и вред долгой обиды', 'Resentment and the harm of holding a grudge')],
          [T('Компьютердик айрым оюндардын зыяндуулугу', 'Вред некоторых компьютерных игр', 'The harm of some computer games')],
          [T('Бактылуу болуу мүнөздөн', 'Счастье зависит от характера', 'Happiness depends on character')],
          [{ ...T('Мектебимди жана айылымды таза сактайм', 'Забочусь о чистоте школы и родного края', 'Caring for my school and local environment'), adapted: true }],
          [T('Ак эмгектин наны таттуу', 'Хлеб честного труда сладок', 'Bread earned by honest work is sweet')],
          [{ ...T('Жакшы ишти чогуу уюштурабыз', 'Вместе организуем доброе дело', 'Organising a helpful class project together'), adapted: true }],
          [T('Туура тамактануу – ден соолукка, узак жашоого өбөлгө', 'Правильное питание – залог здоровья и долгой жизни', 'Healthy eating is the key to health and a long life')],
        ],
      },
      {
        grade: 4,
        months: [
          [T('Табиятты сүй!', 'Люби природу!', 'Love nature!')],
          [
            T('Өнөр алды – кызыл тил', 'Прежде мастерства – красноречие', 'Eloquence comes before any craft'),
            T('Каадасы болбой эл болбойт', 'Без обычаев не бывает народа', 'Without customs there is no nation'),
            T('Толеранттуулук', 'Толерантность', 'Tolerance'),
          ],
          [T('Адал ырыскы. Арамдан алыс бол!', 'Честный достаток. Держись подальше от нечестного!', 'Honest earnings. Stay away from dishonest gain!')],
          [T('Баланын укугу жана милдеттери', 'Права и обязанности ребёнка', 'The rights and duties of the child')],
          [T('Жети атаңды бил', 'Знай своих семерых предков', 'Know your seven ancestors')],
          [T('Ысык-Көл кыргыз бермети', 'Иссык-Куль – жемчужина кыргызов', 'Issyk-Kul, the pearl of the Kyrgyz')],
          [T('Өнөрлүү өлбөйт', 'Мастер не пропадёт', 'A skilled person never goes under')],
          [
            T('Жоомарттык', 'Щедрость', 'Generosity'),
            T('Дүйнө адамдардын ачылыштары', 'Открытия людей мира', 'Discoveries of humankind'),
          ],
          [T('Канча тил билсең, ошончо дил, эл билесиң', 'Сколько языков знаешь, столько сердец и народов постигаешь', 'The more languages you know, the more hearts and peoples you understand')],
        ],
      },
    ],
  },
  'middle-school': {
    key: 'middle',
    band: 3,
    topics: [
      {
        grade: 5,
        months: [
          // September – Caring
          [
            T('Кам көрүү – адамгерчиликтин башаты', 'Забота – источник человечности', 'Caring is the root of humanity'),
            T('Классташым менен бөлүшөм', 'Делюсь с одноклассниками', 'Sharing with my classmates'),
            T('Ыраазычылык күндөлүгү', 'Дневник благодарности', 'My gratitude journal'),
          ],
          // October – Respect
          [
            T('Өзүмдү сыйлайм, башкаларды сыйлайм', 'Уважаю себя и других', 'Respecting myself and others'),
            T('Улуулар менен сүйлөшүү этикасы', 'Этика общения со старшими', 'How to speak with elders'),
            T('Кийинүү маданияты', 'Культура одежды', 'Dressing for the occasion'),
          ],
          // November – Trustworthiness
          [
            T('Убада – милдет', 'Обещание – это долг', 'A promise is a commitment'),
            T('Өз ишимди өзүм жасайм', 'Работу выполняю сам', 'Doing my own work'),
            T('Сыр сактоону билем', 'Умею хранить тайну', 'Keeping confidences'),
          ],
          // December – Responsibility
          [
            T('Мектептеги жана үйдөгү милдеттерим', 'Мои обязанности дома и в школе', 'My duties at school and at home'),
            T('Убактымды пландайм', 'Планирую своё время', 'Planning my time'),
            T('Катам үчүн жооп берем', 'Отвечаю за свои ошибки', 'Taking responsibility for my mistakes'),
          ],
          // January – Fairness
          [
            T('Адилеттүүлүк деген эмне?', 'Что такое справедливость?', 'What does fairness mean?'),
            T('Эрежелер баарына бирдей', 'Правила одинаковы для всех', 'Rules apply equally to everyone'),
            T('Таарынычты адилет чечүү', 'Справедливо решать обиды', 'Resolving conflicts fairly'),
          ],
          // February – Citizenship
          [
            T('Менин мекеним – Кыргызстан', 'Моя Родина – Кыргызстан', 'My homeland is Kyrgyzstan'),
            T('Жаратылышты коргойм', 'Берегу природу', 'Protecting nature'),
            T('Жамаатка жардамым', 'Моя помощь сообществу', 'Helping my community'),
          ],
          // March – Perseverance
          [
            T('Кыйынчылыктан коркпойм', 'Не боюсь трудностей', 'Facing challenges without fear'),
            T('Китеп – менин досум', 'Книга – мой друг', 'Reading is my strength'),
            T('Кайра аракет кылам', 'Пробую снова', 'Trying again and again'),
          ],
          // April – Leadership
          [
            T('Лидерлик – кызмат кылуу', 'Лидерство – это служение', 'Leadership is service'),
            T('Командада иштейм', 'Работаю в команде', 'Working as a team'),
            T('Идеяларымды бөлүшөм', 'Делюсь идеями', 'Sharing my ideas'),
          ],
          // May – Self-Discipline
          [
            T('Эмоцияларымды башкарам', 'Управляю эмоциями', 'Managing my emotions'),
            T('Ден соолук – чыныгы байлык', 'Здоровье – настоящее богатство', 'Health is true wealth'),
            T('Телефонду туура колдоном', 'Правильно пользуюсь телефоном', 'Using my phone wisely'),
          ],
        ],
      },
      {
        grade: 6,
        months: [
          // September – Caring
          [
            T('Эмпатия: башканын ордунда', 'Эмпатия: на месте другого', 'Empathy: standing in another’s shoes'),
            T('Жалгыз калганга колдоо', 'Поддержка тому, кто остался один', 'Supporting the left-out classmate'),
            T('Берешендик – жүрөк байлыгы', 'Щедрость – богатство сердца', 'Generosity is the wealth of the heart'),
          ],
          // October – Respect
          [
            T('Ар түрдүүлүктү сыйлоо', 'Уважение к разнообразию', 'Respecting diversity'),
            T('Сөз маданияты', 'Культура речи', 'Respectful language'),
            T('Кыргыз салтында сый-урмат', 'Уважение в кыргызских традициях', 'Respect in Kyrgyz traditions'),
          ],
          // November – Trustworthiness
          [
            T('Чындыктын күчү', 'Сила правды', 'The power of truth'),
            T('Көчүрүү эмес – түшүнүү', 'Не списывать, а понимать', 'Understanding, not copying'),
            T('Ишенимди актоо', 'Оправдывать доверие', 'Earning and keeping trust'),
          ],
          // December – Responsibility
          [
            T('Максат койгонду үйрөнөм', 'Учусь ставить цели', 'Learning to set goals'),
            T('Үй-бүлөдөгү милдетим', 'Мои обязанности в семье', 'My role in the family'),
            T('Өз сөзүмө ээмин', 'Отвечаю за свои слова', 'Standing behind my words'),
          ],
          // January – Fairness
          [
            T('Зомбулуксуз мектеп', 'Школа без буллинга', 'A bullying-free school'),
            T('Кечирим сурай билүү', 'Уметь просить прощения', 'Knowing how to apologize'),
            T('Калыс болуу', 'Быть беспристрастным', 'Being impartial'),
          ],
          // February – Citizenship
          [
            T('Жарандык милдет', 'Гражданский долг', 'Civic duty'),
            T('Айлана-чөйрөнү коргоо', 'Защита окружающей среды', 'Protecting the environment'),
            T('Кыргызстандын баалуулуктары', 'Ценности Кыргызстана', 'The values of Kyrgyzstan'),
          ],
          // March – Perseverance
          [
            T('Ийгиликтин сыры – эмгек', 'Секрет успеха – труд', 'The secret of success is effort'),
            T('Каталардан сабак алам', 'Учусь на ошибках', 'Learning from mistakes'),
            T('Максатка бекем', 'Твёрдо иду к цели', 'Staying committed to my goal'),
          ],
          // April – Leadership
          [
            T('Уга билүү – лидердин сыпаты', 'Умение слушать – качество лидера', 'Listening: a leader’s quality'),
            T('Топто чечим кабыл алуу', 'Принятие решений в группе', 'Making decisions as a group'),
            T('Жоопкерчиликтүү лидерлик', 'Ответственное лидерство', 'Responsible leadership'),
          ],
          // May – Self-Discipline
          [
            T('Стрессти башкарам', 'Управляю стрессом', 'Managing stress'),
            T('Соцтармак маданияты', 'Культура соцсетей', 'Social media etiquette'),
            T('Сергек жашоо образы', 'Здоровый образ жизни', 'A healthy lifestyle'),
          ],
        ],
      },
      {
        grade: 7,
        months: [
          // September – Caring
          [
            T('Сезимдерди түшүнүү', 'Понимание чувств', 'Understanding feelings'),
            T('Камкорлук – күнүмдүк адат', 'Забота – ежедневная привычка', 'Making care a daily habit'),
            T('Ыраазы болуу өнөрү', 'Искусство благодарности', 'The art of gratitude'),
          ],
          // October – Respect
          [
            T('Көз караштарды урматтоо', 'Уважение к разным мнениям', 'Respecting different opinions'),
            T('Гендердик теңдик жана сый', 'Гендерное равенство и уважение', 'Gender equality and respect'),
            T('Улуттар аралык ынтымак', 'Межнациональное согласие', 'Harmony between ethnic groups'),
          ],
          // November – Trustworthiness
          [
            T('Санариптик чынчылдык', 'Цифровая честность', 'Digital honesty'),
            T('Берилген сөз – ыйык', 'Данное слово свято', 'A given word is sacred'),
            T('Жеке маалымат жана ишеним', 'Личные данные и доверие', 'Privacy and trust'),
          ],
          // December – Responsibility
          [
            T('Максат жана план', 'Цели и планы', 'Goals and planning'),
            T('Убакытты башкаруу', 'Тайм-менеджмент', 'Managing my time'),
            T('Үй иштерин бөлүшүү', 'Разделение домашних дел', 'Sharing family duties'),
          ],
          // January – Fairness
          [
            T('Киберкуугунтукка жол жок', 'Нет кибербуллингу', 'No to cyberbullying'),
            T('Бир жактуулуксуз баалоо', 'Оценка без предвзятости', 'Judging without bias'),
            T('Чыр-чатакты тынч чечүү', 'Мирное решение конфликтов', 'Resolving conflicts peacefully'),
          ],
          // February – Citizenship
          [
            T('Ыктыярчылык – жарандын иши', 'Волонтёрство – дело гражданина', 'Volunteering: a citizen’s work'),
            T('Экологиялык изим', 'Мой экологический след', 'My ecological footprint'),
            T('Улуттук мурасты баалайм', 'Ценю национальное наследие', 'Valuing our national heritage'),
          ],
          // March – Perseverance
          [
            T('Максатка карай кадам', 'Шаг за шагом к цели', 'Step by step toward my goal'),
            T('Өжөрлүк жана сабыр', 'Упорство и терпение', 'Determination and patience'),
            T('Ийгилик – эмгектин жемиши', 'Успех – плод труда', 'Success is the fruit of effort'),
          ],
          // April – Leadership
          [
            T('Ынандыруу жана мотивация', 'Убеждение и мотивация', 'Persuading and motivating others'),
            T('Чакан долбоор жетектөө', 'Руководство небольшим проектом', 'Leading a small project'),
            T('Демилге жана чечим', 'Инициатива и решения', 'Initiative and decisions'),
          ],
          // May – Self-Discipline
          [
            T('Эмоцияларды таануу', 'Распознавание эмоций', 'Recognizing my emotions'),
            T('Санариптик эс алуу', 'Цифровой детокс', 'Digital detox and balance'),
            T('Өзүн-өзү тарбиялоо', 'Самовоспитание', 'Building self-discipline habits'),
          ],
        ],
      },
      {
        grade: 8,
        months: [
          // September – Caring
          [
            T('Камкорлук – күч, алсыздык эмес', 'Забота – это сила, а не слабость', 'Caring is strength, not weakness'),
            T('Досума ишеним жана колдоо', 'Доверие и поддержка другу', 'Trust and support for a friend'),
            T('Жалгыз калгандарга мээрим', 'Доброта к одиноким', 'Kindness to those who are alone'),
          ],
          // October – Respect
          [
            T('Өзүн алып жүрүү маданияты', 'Культура поведения', 'Carrying myself with respect'),
            T('Мугалимге жана улууларга сый', 'Уважение к учителям и старшим', 'Respect for teachers and elders'),
            T('Өзүн-өзү сыйлоо', 'Самоуважение', 'Self-respect'),
          ],
          // November – Trustworthiness
          [
            T('Убадамды аткарам', 'Выполняю обещания', 'Keeping my promises'),
            T('Окууда тазалык', 'Честность в учёбе', 'Honesty in my schoolwork'),
            T('Интернетте чынчылдык', 'Честность в интернете', 'Being truthful online'),
          ],
          // December – Responsibility
          [
            T('Үй жана мектеп милдеттерим', 'Мои обязанности дома и в школе', 'My duties at home and at school'),
            T('Убактымды башкарам', 'Управляю своим временем', 'Managing my time'),
            T('Максат койгонду үйрөнөм', 'Учусь ставить цели', 'Learning to set goals'),
          ],
          // January – Fairness
          [
            T('Адилеттүүлүк жана теңдик', 'Справедливость и равенство', 'Fairness and equality'),
            T('Топто калыс чечим', 'Справедливые решения в группе', 'Fair decisions in a group'),
            T('Башканын көз карашын угуу', 'Умение слышать чужое мнение', 'Listening to other points of view'),
          ],
          // February – Citizenship
          [
            T('Мекенимдин баалуулуктары', 'Ценности моей страны', 'The values of my country'),
            T('Жаратылышты коргоо', 'Защита природы', 'Protecting the environment'),
            T('Коомдук иштерге катышуу', 'Участие в общественных делах', 'Taking part in community life'),
          ],
          // March – Perseverance
          [
            T('Максатка жетүү жолу', 'Путь к достижению цели', 'The path to achieving my goal'),
            T('Ката – өсүүнүн баскычы', 'Ошибка – ступень роста', 'Mistakes are steps of growth'),
            T('Эмгекчилдик', 'Трудолюбие', 'Hard work and diligence'),
          ],
          // April – Leadership
          [
            T('Өзүмө ишенүү', 'Уверенность в себе', 'Confidence in myself'),
            T('Команда менен иштөө', 'Работа в команде', 'Working with a team'),
            T('Лидерликке кадам', 'Шаг к лидерству', 'Stepping up to lead'),
          ],
          // May – Self-Discipline
          [
            T('Эмоцияларымды түшүнөм', 'Понимаю свои эмоции', 'Understanding my emotions'),
            T('Соцтармактардагы убактым', 'Моё время в соцсетях', 'My time on social media'),
            T('Ден соолук адаттары', 'Привычки для здоровья', 'Healthy daily habits'),
          ],
        ],
      },
    ],
  },
  'high-school': {
    key: 'high',
    band: 4,
    topics: [
      {
        grade: 9,
        months: [
          // September – Caring
          [
            T('Достукта чын ыклас', 'Искренность в дружбе', 'Sincerity in friendship'),
            T('Үй-бүлөмө колдоо', 'Поддержка семьи', 'Supporting my family'),
            T('Бөтөн кишиге мээрим', 'Доброта к незнакомцам', 'Kindness to strangers'),
          ],
          // October – Respect
          [
            T('Өзүмдү жана башкаларды сыйлоо', 'Самоуважение и уважение к другим', 'Self-respect and respect for others'),
            T('Маданияттуу диалог', 'Культура диалога', 'Civil dialogue'),
            T('Ар кимдин кадыр-баркы', 'Достоинство каждого человека', 'The dignity of every person'),
          ],
          // November – Trustworthiness
          [
            T('Окуудагы чынчылдык', 'Честность в учёбе', 'Academic integrity'),
            T('Сөзүмдө турам', 'Держу слово', 'Keeping my word'),
            T('Сырды коргоо', 'Защита конфиденциальности', 'Protecting confidentiality'),
          ],
          // December – Responsibility
          [
            T('Кесип тандоо', 'Выбор профессии', 'Choosing my path'),
            T('Акча жана жоопкерчилик', 'Деньги и ответственность', 'Money and responsibility'),
            T('Санариптик изим', 'Цифровой след', 'My digital footprint'),
          ],
          // January – Fairness
          [
            T('Адам укуктары', 'Права человека', 'Human rights'),
            T('Басмырлоого каршы', 'Против дискриминации', 'Standing against discrimination'),
            T('Калыс талаш чечүү', 'Справедливое разрешение споров', 'Resolving disputes fairly'),
          ],
          // February – Citizenship
          [
            T('Жарандык активдүүлүк', 'Гражданская активность', 'Civic participation'),
            T('Ыктыярчылыктын пайдасы', 'Польза волонтёрства', 'The value of volunteering'),
            T('Туулган жердин табияты', 'Природа родного края', 'The nature of my homeland'),
          ],
          // March – Perseverance
          [
            T('Ийгиликсиздик – сабак', 'Неудача – это урок', 'Failure is a lesson'),
            T('Экзаменге даярдык', 'Подготовка к экзаменам', 'Preparing for exams'),
            T('Узак мөөнөттүү максаттар', 'Долгосрочные цели', 'Long-term goals'),
          ],
          // April – Leadership
          [
            T('Өзүмө ишенем', 'Верю в себя', 'Believing in myself'),
            T('Коомдук сүйлөө', 'Публичное выступление', 'Public speaking'),
            T('Долбоор баштайм', 'Начинаю проект', 'Starting a project'),
          ],
          // May – Self-Discipline
          [
            T('Стресс менен күрөшүү', 'Борьба со стрессом', 'Coping with stress'),
            T('Уйку жана ден соолук', 'Сон и здоровье', 'Sleep and health'),
            T('Телефонсуз күн', 'День без телефона', 'A phone-free day'),
          ],
        ],
      },
      {
        grade: 10,
        months: [
          // September – Caring
          [
            T('Эмпатияны өнүктүрүү', 'Развитие эмпатии', 'Developing empathy'),
            T('Камкордук иш жүзүндө', 'Забота на деле', 'Showing care in action'),
            T('Курдаштарга колдоо', 'Поддержка сверстников', 'Peer support'),
          ],
          // October – Respect
          [
            T('Көп түрдүүлүктөгү биримдик', 'Единство в многообразии', 'Unity in diversity'),
            T('Сынды туура кабыл алуу', 'Правильно принимать критику', 'Accepting criticism with grace'),
            T('Мамилелерде чек ара', 'Границы в отношениях', 'Boundaries in relationships'),
          ],
          // November – Trustworthiness
          [
            T('Көчүрмө эмес, өз эмгегим', 'Не плагиат, а мой труд', 'Original work, not plagiarism'),
            T('Онлайн чынчылдык', 'Честность онлайн', 'Honesty online'),
            T('Ишенимди калыбына келтирүү', 'Восстановление доверия', 'Rebuilding trust'),
          ],
          // December – Responsibility
          [
            T('Убакыт жана артыкчылыктар', 'Время и приоритеты', 'Time and priorities'),
            T('Финансылык сабаттуулук', 'Финансовая грамотность', 'Financial literacy basics'),
            T('Үй-бүлөгө салым', 'Вклад в семью', 'Contributing to the family'),
          ],
          // January – Fairness
          [
            T('Социалдык адилеттүүлүк', 'Социальная справедливость', 'Social justice'),
            T('Көз караштарды салыштыруу', 'Сравнение точек зрения', 'Comparing viewpoints fairly'),
            T('Зордук-зомбулуксуз чөйрө', 'Среда без насилия', 'A violence-free environment'),
          ],
          // February – Citizenship
          [
            T('Жарандык милдеттер', 'Гражданские обязанности', 'Civic duties'),
            T('Экологиялык демилге', 'Экологическая инициатива', 'An environmental initiative'),
            T('Улуттук мурас жана дүйнө', 'Национальное наследие и мир', 'National heritage and the wider world'),
          ],
          // March – Perseverance
          [
            T('Тартип – ийгиликтин ачкычы', 'Дисциплина – ключ к успеху', 'Discipline is the key to success'),
            T('Күнүмдүк адаттар', 'Ежедневные привычки', 'Daily habits for growth'),
            T('Кыйын мезгилде токтобо', 'Не останавливаться в трудные времена', 'Not stopping in hard times'),
          ],
          // April – Leadership
          [
            T('Команданы жетектөө', 'Руководство командой', 'Leading a team'),
            T('Ынандыруу этикасы', 'Этика убеждения', 'Ethical persuasion'),
            T('Кичүүлөргө насаатчылык', 'Наставничество младших', 'Mentoring younger students'),
          ],
          // May – Self-Discipline
          [
            T('Психикалык ден соолук', 'Психическое здоровье', 'Mental-health habits'),
            T('Ачууну башкаруу', 'Управление гневом', 'Managing anger'),
            T('Санариптик тең салмак', 'Цифровой баланс', 'Digital balance'),
          ],
        ],
      },
      {
        grade: 11,
        months: [
          // September – Caring
          [
            T('Боорукердик – жашоо маңызы', 'Сострадание – суть жизни', 'Compassion as a way of life'),
            T('Коомдо камкордук', 'Забота в обществе', 'Caring in the community'),
            T('Ыраазычылык жана канааттануу', 'Благодарность и довольство', 'Gratitude and contentment'),
          ],
          // October – Respect
          [
            T('Ар түрдүү ишенимдерди сыйлоо', 'Уважение к разным убеждениям', 'Respecting diverse beliefs'),
            T('Келишпестикте сый', 'Уважение при несогласии', 'Respectful disagreement'),
            T('Өз баасын билүү', 'Знать себе цену', 'Knowing my worth'),
          ],
          // November – Trustworthiness
          [
            T('Чоң чечимдерде чынчылдык', 'Честность в серьёзных решениях', 'Honesty in big decisions'),
            T('Жоопкерчиликтүү убадалар', 'Ответственные обещания', 'Responsible promises'),
            T('Документте жана сөздө чындык', 'Правда в документах и словах', 'Truth in documents and words'),
          ],
          // December – Responsibility
          [
            T('Болочокко кадам', 'Шаг в будущее', 'Planning my future'),
            T('Өз алдынча жашоого даярдык', 'Подготовка к самостоятельной жизни', 'Preparing for independent life'),
            T('Жарандык милдеттерим', 'Мои гражданские обязанности', 'My civic responsibilities'),
          ],
          // January – Fairness
          [
            T('Адилеттүүлүк үчүн үн', 'Голос за справедливость', 'Speaking up for justice'),
            T('Топтордо калыстык', 'Справедливость в группах', 'Fairness in groups'),
            T('Мыйзам жана адилеттик', 'Закон и справедливость', 'Law and justice'),
          ],
          // February – Citizenship
          [
            T('Жаран катары бой жетишүү', 'Взросление как гражданин', 'Coming of age as a citizen'),
            T('Коомдук долбоорлор', 'Общественные проекты', 'Community projects'),
            T('Дүйнөлүк жарандык', 'Глобальное гражданство', 'Global citizenship'),
          ],
          // March – Perseverance
          [
            T('Максаттын жолу', 'Путь к цели', 'The road to my goal'),
            T('Кайраттуулук', 'Мужество', 'Courage through difficulty'),
            T('Узак мөөнөттүү эмгек', 'Долгосрочный труд', 'Sustained effort over time'),
          ],
          // April – Leadership
          [
            T('Этикалык лидерлик', 'Этичное лидерство', 'Ethical leadership'),
            T('Коомго оң таасир', 'Положительное влияние на общество', 'Positive influence on society'),
            T('Команда менен жетишүү', 'Достижения с командой', 'Achieving together as a team'),
          ],
          // May – Self-Discipline
          [
            T('Эмоциялар жана чечимдер', 'Эмоции и решения', 'Emotions and decisions'),
            T('Бойго жеткен жашоо адаттары', 'Привычки взрослой жизни', 'Habits for adult life'),
            T('Технология жана эс алуу', 'Технологии и отдых', 'Technology and rest'),
          ],
        ],
      },
    ],
  },
};

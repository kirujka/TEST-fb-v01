/* Forumsbeitrag — конструктор v0.1 «черновик под корректора» (28.10.2026)
   Deutsch-Test für den Beruf B2, «Sprachbausteine und Schreiben», Aufgabe 58.
   Основа — исходник Кирилла «FB 27 aprel finish» (claude/FB_Original_27april.md).
   Метки происхождения у каждой строки:
     orig — ТВОЁ: из исходника Кирилла (только опечатки исправлены)
     neu  — НОВОЕ: добавил Claude, Кирилл уже одобрил идею
     wahl — ВЫБОР: несколько вариантов, окончательный выбирают Кирилл и корректор
   К каждой немецкой единице — русский перевод. */

const DATA_VERSION = "0.1";

const HERKUNFT = {
  orig:{ label:"ТВОЁ",  ru:"из твоего шаблона — не менять" },
  neu: { label:"НОВОЕ", ru:"новое, идея одобрена — корректор проверяет язык" },
  wahl:{ label:"ВЫБОР", ru:"вариант на выбор — решаете ты и корректор" }
};

const BLOECKE = [

{ id:"1", kreis:1, herkunft:"orig", de:"Anrede", ru:"Приветствие",
  rahmen:{ de:"Hallo zusammen!", ru:"Всем привет!" },
  slots:[], falle:"Форум внутри фирмы — обращение на «ihr» ко всем коллегам. Дальше в тексте только ihr / euch / eure, не Sie.", c1:[] },

{ id:"2", kreis:1, herkunft:"orig", de:"Einstieg", ru:"Вход в тему — о чём спорят",
  rahmen:{ de:"Im Team wird über [THEMA] gestritten.", ru:"В команде спорят о [ТЕМЕ]." },
  slots:[
    { key:"huelle", joker:true, herkunft:"neu",
      de:"die geplante [Hülle auf -ung] + [что / чего]",
      ru:"планируемом [введении / отмене / переходе …] + [чего]",
      note:"[THEMA] = «обёртка» на -ung из глагола задания + синоним слова задания. Список обёрток — ниже. Образцы для 30 тем — вкладка «Образцы»" },
    { key:"huelle_c1", herkunft:"wahl",
      de:"die von der Geschäftsleitung geplante [Hülle] …",
      ru:"запланированном руководством [введении …] …",
      note:"подъём до C1 — erweitertes Partizipialattribut. На выбор: брать или нет" }
  ],
  gruppen:[
    { titel:"Рамки входа — на выбор корректору (во все рамки [THEMA] ставится без изменений)", herkunft:"wahl",
      items:[
        { key:"r1", herkunft:"orig", de:"Im Team wird über [THEMA] gestritten.", ru:"В команде спорят о [ТЕМЕ].", note:"твоя рамка" },
        { key:"r2", herkunft:"wahl", de:"[THEMA] sorgt in unserem Team derzeit für heftige Diskussionen.", ru:"[ТЕМА] сейчас вызывает в нашей команде горячие споры.", note:"Nomen-Verb-Verbindung «für Diskussionen sorgen». ⚠ derzeit — и в следующем предложении 2б" },
        { key:"r3", herkunft:"wahl", de:"Seit Kurzem wird in unserem Team intensiv über [THEMA] diskutiert.", ru:"С недавних пор в нашей команде активно обсуждают [ТЕМУ].", note:"Passiv" },
        { key:"r4", herkunft:"wahl", de:"Wie ihr sicher schon wisst, hat die Geschäftsleitung [THEMA] angekündigt, was in unserem Team für viel Gesprächsstoff sorgt.", ru:"Как вы наверняка знаете, руководство объявило о [ТЕМЕ], и это даёт команде много поводов для разговоров.", note:"длиннее всех; relativer Anschluss «was»" }
      ]},
    { titel:"Обёртки на -ung: глагол из задания → существительное (все женского рода: die … — в рамку без изменений)", herkunft:"neu",
      items:[
        { de:"einführen → die geplante Einführung + Gen.", ru:"вводить → планируемое введение (чего)" },
        { de:"abschaffen → die geplante Abschaffung + Gen.", ru:"отменять → планируемая отмена (чего)" },
        { de:"umstellen → die geplante Umstellung auf + Akk.", ru:"переводить → планируемый переход на (что)" },
        { de:"verkürzen → die geplante Verkürzung + Gen.", ru:"сокращать (по времени) → сокращение (чего)" },
        { de:"ausweiten → die geplante Ausweitung + Gen. auf + Akk.", ru:"расширять → расширение (чего) на (что)" },
        { de:"verpflichten → die geplante Verpflichtung zur / zum + Dat.", ru:"обязывать → обязанность (к чему)" },
        { de:"anschaffen → die geplante Anschaffung + Gen.", ru:"приобретать → приобретение (чего)" },
        { de:"einrichten → die geplante Einrichtung + Gen.", ru:"открывать, обустраивать → открытие (чего)" },
        { de:"einstellen → die geplante Einstellung + Gen.", ru:"нанимать → наём (кого)" },
        { de:"senken → die geplante Senkung + Gen.", ru:"снижать → снижение (чего)" },
        { de:"streichen → die geplante Streichung + Gen.", ru:"вычёркивать, отменять (деньги) → отмена (чего)" },
        { de:"beschränken → die geplante Beschränkung + Gen. auf + Akk.", ru:"ограничивать → ограничение (чего) до (чего)" },
        { de:"ausstatten → die geplante Ausstattung + Gen. mit + Dat.", ru:"оснащать → оснащение (кого) (чем)" },
        { de:"[entweder … oder] → die Wahl zwischen + Dat. und + Dat.", ru:"[либо … либо] → выбор между (чем) и (чем)" }
      ]}
  ],
  falle:"Не копировать задание и не ставить «das Thema „…“» (по словам Кирилла — сразу 0). Механизм: глагол задания → обёртка на -ung + синоним из пакета слов. Genitiv после обёртки: прилагательное всегда -en (einer einheitlichEN Dienstkleidung, eines großEN Druckers). Если Genitiv пугает — предлог: Umstellung AUF, Verpflichtung ZUR. Длинный «хвост» темы (придаточное с которым/которой или добавка через тире) ставится ПОСЛЕ gestritten: «Im Team wird über die geplante Einführung einer einheitlichen Dienstkleidung gestritten, für deren Reinigung jeder selbst aufkommen soll.»",
  c1:["Nominalisierung — отглагольные существительные на -ung","Genitivattribut","erweitertes Partizipialattribut (вариант C1)"] },

{ id:"3", kreis:1, herkunft:"orig", de:"Relevanz", ru:"Почему тема важна",
  rahmen:{ de:"Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
           ru:"Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы." },
  slots:[], falle:"da = так как (придаточное, глагол в конце: betrifft).", c1:["Kausalsatz mit «da»"] },

{ id:"4", kreis:1, herkunft:"orig", de:"Position", ru:"Моя позиция",
  rahmen:{ de:"Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
           ru:"Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду." },
  slots:[],
  gruppen:[
    { titel:"Тема-ВЫБОР (entweder … oder / statt) — зеркальная форма", herkunft:"wahl",
      items:[
        { key:"t4", herkunft:"wahl", de:"Ich persönlich würde mich eindeutig für [вариант A, Akk.] entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
          ru:"Я бы однозначно выбрал [вариант A], так как этот вариант положительно влияет на нашу рабочую среду.",
          note:"für + Akkusativ: für den Zuschuss / für das Fahrrad / für die Urlaubstage" }
      ]}
  ],
  falle:"beeinflussen — без предлога (рус. «влиять НА» тянет к «auf» — ошибка). sie = die Maßnahme.", c1:["Kausalsatz mit «da»","Konjunktiv II «würde … entscheiden» (форма выбора)"] },

{ id:"5", kreis:1, herkunft:"orig", de:"Grund 1", ru:"Довод 1 — главный минус",
  rahmen:{ de:"Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass [X].",
           ru:"Этому есть несколько причин. Во-первых, существенный недостаток в том, что [X]." },
  slots:[
    { key:"kosten", joker:true, herkunft:"orig", de:"die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert",
      ru:"реализация требует больших финансовых средств и высоких организационных затрат", note:"ДЖОКЕР · тип T5 (фирма что-то даёт) и T6 (перестройка)" },
    { key:"kosten2", herkunft:"wahl", de:"die Umsetzung sowohl große finanzielle Mittel als auch einen hohen organisatorischen Aufwand erfordert",
      ru:"реализация требует как больших финансовых средств, так и высоких организационных затрат", note:"ВЫБОР: тот же джокер + двойной союз sowohl … als auch (+2 слова, +1 флаг)" },
    { key:"freizeit", herkunft:"neu", de:"die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten",
      ru:"сотрудникам пришлось бы пожертвовать частью свободного времени", note:"T1 — обязаловка, суббота, вне рабочего времени, «всегда на связи»" },
    { key:"belastung", herkunft:"neu", de:"dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht",
      ru:"для сотрудников из-за этого возникает дополнительная финансовая нагрузка", note:"T2 — платят сотрудники" },
    { key:"flex", herkunft:"neu", de:"den Mitarbeitern dadurch ein Stück Flexibilität genommen wird",
      ru:"у сотрудников из-за этого отнимают часть свободы", note:"T3 — урезают, запрещают" },
    { key:"integr", herkunft:"neu", de:"sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt",
      ru:"это изменение трудно встроить в наши повседневные рабочие процессы", note:"T6 — перестройка, новые правила" },
    { key:"druck", herkunft:"neu", de:"dadurch ein erheblicher Druck auf die Mitarbeiter entsteht",
      ru:"из-за этого на сотрудников ложится сильное давление", note:"контроль, наказания, «всегда на связи», премия за «не болел»" },
    { key:"mehraufwand", herkunft:"neu", de:"dadurch ein erheblicher Mehraufwand für die Kollegen entsteht",
      ru:"из-за этого у коллег появляется много дополнительной работы", note:"стажёры, наставничество, уборка самим, новые процессы" }
  ],
  gruppen:[
    { titel:"Тема-ВЫБОР — зеркальная форма: «Ein wesentlicher Vorteil ist, dass …»", herkunft:"wahl",
      items:[
        { key:"pro1", joker:true, herkunft:"wahl", de:"diese Variante den Bedürfnissen der meisten Kollegen besser entspricht", ru:"этот вариант лучше отвечает потребностям большинства коллег", note:"джокер для темы-выбора" },
        { key:"pro2", herkunft:"wahl", de:"alle Kollegen gleichermaßen davon profitieren können", ru:"все коллеги могут в равной мере извлечь из этого пользу" },
        { key:"pro3", herkunft:"wahl", de:"sie langfristig einen größeren Nutzen bringt", ru:"в долгосрочной перспективе он приносит больше пользы" }
      ]}
  ],
  falle:"После двоеточия целое предложение — с большой буквы: «Erstens: Ein …» (в исходнике было «ein»). После dass глагол в конце: … erfordert / … müssten / … entsteht. dadurch = «из-за этого», стоит сразу после dass или после подлежащего.",
  c1:["Konjunktiv II «müssten»","Passiv «genommen wird»","Passiversatz «sich … integrieren lässt»","Doppelkonnektor «sowohl … als auch» (вариант)"] },

{ id:"6", kreis:1, herkunft:"orig", de:"Grund 2", ru:"Довод 2 — несправедливость",
  rahmen:{ de:"Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
           ru:"Кроме того, мера может восприниматься как несправедливая и привести к недовольству." },
  slots:[],
  gruppen:[
    { titel:"Тема-ВЫБОР — зеркальная форма", herkunft:"wahl",
      items:[ { key:"t4b", herkunft:"wahl", de:"Zudem könnte diese Lösung von vielen Kollegen als fairer empfunden werden.", ru:"Кроме того, многие коллеги могли бы воспринять это решение как более справедливое." } ]}
  ],
  falle:"Джокер ко всем типам. als … empfunden werden — «восприниматься как» (рус. «воспринимается КАК несправедливая» — совпадает). zu + Dativ: zu Unzufriedenheit führen.",
  c1:["Konjunktiv II «könnte»","Passiv mit Modalverb «empfunden werden»","Nomen-Verb-Verbindung «zu … führen»"] },

{ id:"7", kreis:1, herkunft:"orig", de:"Beispiel", ru:"Пример",
  rahmen:{ de:"Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
           ru:"Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер." },
  slots:[],
  gruppen:[
    { titel:"Тема-ВЫБОР — зеркальная форма", herkunft:"wahl",
      items:[ { key:"t4c", herkunft:"wahl", de:"Beispielsweise hat ein Unternehmen diese Variante bereits getestet und sehr gute Ergebnisse erzielt. Insofern spiegelt dies einen positiven Trend wider, da sich immer mehr Unternehmen dafür entscheiden.",
                ru:"Например, одна компания уже опробовала этот вариант и добилась очень хороших результатов. В этом смысле это отражает положительную тенденцию, так как всё больше компаний выбирают его." } ]}
  ],
  falle:"widerspiegeln — разделяемый: spiegelt … wider (wider в конец главного). Perfekt «hat … getestet, … erzielt» — один hat на оба причастия.",
  c1:["trennbares Verb «widerspiegeln»","Konnektoren «jedoch», «insofern»","Kausalsatz mit «da»"] },

{ id:"8", kreis:1, herkunft:"wahl", de:"Beispiel konkret", ru:"Пример по теме — наш отдел",
  rahmen:{ de:"Gerade in unserer Abteilung würde das bedeuten, dass [X].", ru:"Именно в нашем отделе это означало бы, что [X]." },
  slots:[
    { key:"z_joker", joker:true, herkunft:"wahl", de:"sich unsere tägliche Arbeit spürbar verschlechtern würde", ru:"наша ежедневная работа заметно ухудшилась бы", note:"джокер" },
    { key:"z_t1", herkunft:"wahl", de:"viele Kollegen ihre Abende und Wochenenden nicht mehr frei planen könnten", ru:"многие коллеги больше не могли бы свободно планировать вечера и выходные", note:"T1" },
    { key:"z_t2", herkunft:"wahl", de:"jeder von uns jeden Monat zusätzlich Geld ausgeben müsste", ru:"каждому из нас пришлось бы ежемесячно тратить дополнительные деньги", note:"T2" },
    { key:"z_t3", herkunft:"wahl", de:"wir deutlich weniger Spielraum bei der Gestaltung unseres Arbeitstages hätten", ru:"у нас было бы гораздо меньше свободы в организации рабочего дня", note:"T3" },
    { key:"z_t5", herkunft:"wahl", de:"ein großer Teil des Budgets für andere wichtige Projekte fehlen würde", ru:"значительной части бюджета не хватило бы на другие важные проекты", note:"T5" },
    { key:"z_t6", herkunft:"wahl", de:"wir uns erst monatelang an die neuen Abläufe gewöhnen müssten", ru:"нам пришлось бы месяцами привыкать к новым процессам", note:"T6" }
  ],
  falle:"ВЫБОР: брать этот блок или нет. Он отвечает на «nennen Sie passende Beispiele» — пример по теме. Лучше всего — конец из слов самого задания (см. «Образцы»). Konjunktiv II в конце придаточного: würde / müsste / könnten / hätten.",
  c1:["Konjunktiv II","Nebensatz mit «dass»"] },

{ id:"9", kreis:1, herkunft:"orig", de:"Gegenargument", ru:"Контрдовод — плюс",
  rahmen:{ de:"Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass [X].",
           ru:"Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что [X]." },
  slots:[
    { key:"arbeitgeber", joker:true, herkunft:"orig", de:"sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann",
      ru:"компания может позиционировать себя как современный и ответственный работодатель", note:"ДЖОКЕР — к любой теме" },
    { key:"umwelt", herkunft:"orig", de:"diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert",
      ru:"эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании", note:"экология, энергия, мусор, транспорт" },
    { key:"gesund", herkunft:"neu", de:"die Gesundheit der Mitarbeiter gefördert wird", ru:"укрепляется здоровье сотрудников", note:"здоровье, еда, спорт, стулья" },
    { key:"team", herkunft:"neu", de:"der Zusammenhalt im Team gestärkt wird", ru:"укрепляется сплочённость команды", note:"коллектив, обеды, праздники, опен-спейс" },
    { key:"effizienz", herkunft:"neu", de:"Arbeitsabläufe effizienter gestaltet werden können", ru:"рабочие процессы можно организовать эффективнее", note:"техника, организация, онлайн, сверхурочные" },
    { key:"sparen", herkunft:"neu", de:"die Firma langfristig Kosten sparen kann", ru:"фирма в долгосрочной перспективе может сэкономить", note:"деньги, принтеры, онлайн-встречи" },
    { key:"erholung", herkunft:"neu", de:"die Mitarbeiter mehr Zeit zur Erholung haben", ru:"у сотрудников больше времени на отдых", note:"время, отгулы, перерывы" },
    { key:"kompetenz", herkunft:"neu", de:"die Mitarbeiter ihre Kompetenzen erweitern können", ru:"сотрудники могут расширить свои компетенции", note:"курсы, обучение, стажёры" },
    { key:"sicher", herkunft:"neu", de:"die Sicherheit am Arbeitsplatz erhöht wird", ru:"повышается безопасность на рабочем месте", note:"правила, ТБ, контроль" },
    { key:"entlastung", herkunft:"neu", de:"die Mitarbeiter finanziell entlastet werden", ru:"сотрудники получают финансовое облегчение", note:"деньги, зарплата, доплаты" }
  ],
  gruppen:[
    { titel:"Тема-ВЫБОР — зеркальная форма: плюс второго варианта", herkunft:"wahl",
      items:[ { key:"t4d", herkunft:"wahl", de:"Jedoch spricht auch einiges für [вариант B, Akk.]: Ein möglicher Vorteil besteht vielleicht darin, dass [X].",
                ru:"Однако кое-что говорит и в пользу [варианта B]: возможное преимущество, вероятно, в том, что [X]." } ]}
  ],
  falle:"Исправлена опечатка исходника: «Ein mögliche» → «Ein möglicher»: der Vorteil — мужской род, после ein прилагательное на -er. darin, dass — «в том, что» (рус. «заключается В ТОМ» — совпадает).",
  c1:["Korrelat «darin, dass»","Passiv «gefördert wird / gestärkt wird»"] },

{ id:"10", kreis:1, herkunft:"wahl", de:"Brücke", ru:"Мостик к финалу — компромисс",
  rahmen:{ de:"[один из вариантов ниже]", ru:"[один из вариантов ниже]" },
  slots:[
    { key:"b1", joker:true, herkunft:"wahl", de:"Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
      ru:"Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять.",
      note:"angesichts + Gen. · sofern · Konj. II · zu-Infinitiv · Passiv" },
    { key:"b2", herkunft:"wahl", de:"Aufgrund dieser Nachteile halte ich es für notwendig, die Maßnahme noch einmal gründlich zu überprüfen. Falls die Geschäftsleitung auf unsere Bedenken eingehen würde, ließe sich sicherlich ein Kompromiss finden.",
      ru:"Из-за этих недостатков я считаю необходимым ещё раз тщательно проверить меру. Если бы руководство учло наши сомнения, наверняка удалось бы найти компромисс.",
      note:"aufgrund + Gen. · halten für · falls · Konj. II · sich lassen" },
    { key:"b3", herkunft:"wahl", de:"Statt die Maßnahme sofort einzuführen, wäre es klüger, gemeinsam nach Alternativen zu suchen. Nur wenn die Bedenken der Mitarbeiter ernst genommen werden, kann die Maßnahme auf Akzeptanz stoßen.",
      ru:"Вместо того чтобы сразу вводить меру, было бы умнее вместе поискать альтернативы. Только если сомнения сотрудников воспримут всерьёз, мера может встретить одобрение.",
      note:"statt … zu · Konj. II · Passiv · NVV «auf Akzeptanz stoßen»" },
    { key:"b4", herkunft:"wahl", de:"Die Entscheidung sollte nicht über unsere Köpfe hinweg getroffen werden, zumal sie viele Kollegen direkt betrifft. Wäre die Geschäftsleitung zu einem offenen Gespräch bereit, könnten wir sicherlich eine Lösung finden, die für alle akzeptabel ist.",
      ru:"Решение не следует принимать через наши головы, тем более что оно напрямую касается многих коллег. Будь руководство готово к открытому разговору, мы наверняка нашли бы решение, приемлемое для всех.",
      note:"zumal · Konditional ohne «wenn» · Konj. II · Relativsatz" },
    { key:"b5", herkunft:"wahl", de:"Vor diesem Hintergrund wäre es wünschenswert, dass die Geschäftsleitung die Maßnahme noch einmal überdenkt. Je früher die Mitarbeiter in die Entscheidung einbezogen werden, desto größer ist die Chance auf eine Lösung, mit der alle zufrieden sind.",
      ru:"На этом фоне было бы желательно, чтобы руководство ещё раз обдумало меру. Чем раньше сотрудников вовлекут в решение, тем выше шанс найти решение, которым все будут довольны.",
      note:"je … desto · Konj. II · Passiv · Relativsatz mit Präposition" },
    { key:"b6", herkunft:"wahl", de:"Meiner Ansicht nach sollte die Geschäftsleitung die Maßnahme nicht nur aus wirtschaftlicher Sicht, sondern auch aus Sicht der Mitarbeiter bewerten. Andernfalls ließe sich kaum vermeiden, dass die Motivation im Team spürbar sinkt.",
      ru:"По-моему, руководству следует оценивать меру не только с экономической точки зрения, но и с точки зрения сотрудников. Иначе вряд ли удастся избежать заметного падения мотивации в команде.",
      note:"nicht nur … sondern auch · Genitiv · andernfalls · sich lassen" }
  ],
  falle:"ВЫБОР: учится ОДИН вариант — тот, что выберешь с корректором. В теме-ВЫБОРЕ (entweder … oder) мостик не ставится: там нет «сомнений», переходишь сразу к блоку 11.",
  c1:["Präpositionen mit Genitiv","Konditionalsätze","Konjunktiv II","Infinitivgruppen"] },

{ id:"11", kreis:1, herkunft:"orig", de:"Vorschlag", ru:"Предложение",
  rahmen:{ de:"Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
           ru:"Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы." },
  slots:[], falle:"Не менять. vorschlagen — разделяемый: schlage … vor.", c1:["trennbares Verb «vorschlagen»"] },

{ id:"12", kreis:1, herkunft:"orig", letzter:true, de:"Schluss", ru:"Финал",
  rahmen:{ de:"Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
           ru:"В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]" },
  slots:[], falle:"Не менять. Исправлены только опечатки: Man → Mann, dahinter stehen → dahinterstehen (пишется слитно).", c1:["Imperativ «Lasst uns …»"] }
];

const REIHENFOLGE = ["1","2","3","4","5","6","7","8","9","10","11","12"];

/* Типы мер — определяют довод 1 и пример по теме */
const TYPEN = [
  { id:"T1", ru:"Обязаловка / свободное время", signal:"verpflichtend, teilnehmen müssen, außerhalb der Arbeitszeit, samstags, am Wochenende, in der Freizeit, immer erreichbar", grund:"freizeit", zusatz:"z_t1", form:"A" },
  { id:"T2", ru:"Платят сотрудники", signal:"selbst bezahlen, privat übernehmen, Eigenbeteiligung, Gebühren, Beitrag, Kosten tragen, kein Urlaubsgeld mehr", grund:"belastung", zusatz:"z_t2", form:"A" },
  { id:"T3", ru:"Урезают / запрещают / контроль", signal:"nur noch, nicht mehr, verkürzen, abschaffen, entfernen, Verbot, bestrafen, nicht erlaubt", grund:"flex", zusatz:"z_t3", form:"A" },
  { id:"T4", ru:"Выбор A или B / X вместо Y", signal:"entweder … oder, oder, statt, Wahl", grund:"pro1", zusatz:"", form:"B" },
  { id:"T5", ru:"Фирма что-то даёт", signal:"Firma übernimmt die Kosten, anschaffen, einrichten, Bonus, kostenlos, zur Verfügung stellen", grund:"kosten", zusatz:"z_t5", form:"A" },
  { id:"T6", ru:"Перестройка работы", signal:"Großraumbüro, online, Homeoffice, Drucker pro Etage, duzen, Musik, mehr Praktikanten, neue Regeln", grund:"integr", zusatz:"z_t6", form:"A" }
];

const FORMEN = [
  { id:"A", titel:"А · Я против", ru:"T1, T2, T3, T5, T6 — почти все темы", bloecke:["1","2","3","4","5","6","7","8","9","10","11","12"] },
  { id:"B", titel:"Б · Я выбираю (зеркальная форма)", ru:"T4 — entweder … oder / statt", bloecke:["1","2","3","4","5","6","7","8","9","11","12"] }
];

/* Чек-лист разбора задания — 60 секунд */
const CHECKLISTE = [
  { de:"Beide Themen lesen", ru:"Прочитать ОБЕ темы. Незнакомые слова — подчеркнуть." },
  { de:"Thema wählen", ru:"Брать тему, которую понял на 100 %. Нехватку слов закроют пакеты и джокеры — непонятое задание не закроет ничто." },
  { de:"Schalter-Wörter suchen", ru:"Обвести переключатели: nur noch · nicht mehr · statt · außer · pro / je · jeweils · ab · erst · kaum · ausschließlich · entweder … oder · aber / jedoch." },
  { de:"Wer soll was?", ru:"Найти глагол-решение (обычно с sollen) → это твоя обёртка на -ung для [THEMA]." },
  { de:"Typ bestimmen", ru:"Тип T1–T6 → какой довод 1 ставишь (вкладка «Как устроено»)." },
  { de:"Gruppe bestimmen", ru:"Группа слов G1–G9 → выписать на черновик 4–5 слов из пакета." },
  { de:"Wörter aus der Aufgabe", ru:"Выписать 4–6 слов из самого задания — они пойдут в [THEMA] и в пример по теме." },
  { de:"Vor der Abgabe", ru:"Проверка: тема в 1-м предложении перефразирована? позиция есть? 2 довода + пример + контрдовод? абзацы? подпись?" }
];

/* Пакеты слов по группам: слова для письма + синонимы «слово задания → чем заменить» */
const PAKETE = [
  { id:"G1", ru:"Деньги", de:"Geld & Kosten",
    woerter:[
      { de:"die finanzielle Belastung", ru:"финансовая нагрузка" },
      { de:"die Kosten tragen", ru:"нести расходы" },
      { de:"das Budget", ru:"бюджет" },
      { de:"die Einsparung / Kosten sparen", ru:"экономия / экономить" },
      { de:"sich etwas leisten können", ru:"мочь себе что-то позволить" },
      { de:"kostspielig", ru:"дорогостоящий" },
      { de:"das Einkommen", ru:"доход" },
      { de:"auf eigene Kosten", ru:"за свой счёт" }
    ],
    synonyme:[
      { aus:"bezahlen", zu:"die Kosten tragen / übernehmen", ru:"платить → нести расходы" },
      { aus:"die Gebühr", zu:"das Entgelt", ru:"плата → вознаграждение, плата (официально)" },
      { aus:"der Lohn / das Gehalt", zu:"die Vergütung", ru:"зарплата → вознаграждение за труд" },
      { aus:"kostenlos", zu:"unentgeltlich", ru:"бесплатно → безвозмездно" }
    ]},
  { id:"G2", ru:"Время", de:"Arbeitszeit & Freizeit",
    woerter:[
      { de:"das Privatleben", ru:"личная жизнь" },
      { de:"das Gleichgewicht zwischen Beruf und Privatleben", ru:"баланс работы и личной жизни" },
      { de:"die Erholung / sich erholen", ru:"отдых / отдыхать" },
      { de:"die Arbeitsbelastung", ru:"рабочая нагрузка" },
      { de:"erschöpft", ru:"измотанный" },
      { de:"flexibel einteilen", ru:"гибко распределять" },
      { de:"die Familie", ru:"семья" },
      { de:"der Feierabend", ru:"конец рабочего дня" }
    ],
    synonyme:[
      { aus:"Überstunden", zu:"die Mehrarbeit", ru:"сверхурочные → переработка" },
      { aus:"außerhalb der Arbeitszeit", zu:"in der Freizeit", ru:"вне рабочего времени → в свободное время" },
      { aus:"am Samstag arbeiten", zu:"die Wochenendarbeit", ru:"работать в субботу → работа в выходные" },
      { aus:"die Pause", zu:"die Erholungsphase", ru:"перерыв → время на восстановление" }
    ]},
  { id:"G3", ru:"Здоровье", de:"Gesundheit & Wohlbefinden",
    woerter:[
      { de:"das Wohlbefinden", ru:"самочувствие" },
      { de:"die Gesundheit fördern", ru:"укреплять здоровье" },
      { de:"der Stress / stressig", ru:"стресс / напряжённый" },
      { de:"die Konzentration", ru:"концентрация" },
      { de:"die Leistungsfähigkeit", ru:"работоспособность" },
      { de:"die Bewegung", ru:"движение, физическая активность" },
      { de:"sich ausgewogen ernähren", ru:"сбалансированно питаться" },
      { de:"belastend", ru:"тягостный, вредный" }
    ],
    synonyme:[
      { aus:"gesund", zu:"gesundheitsfördernd", ru:"здоровый → полезный для здоровья" },
      { aus:"Sport", zu:"körperliche Aktivität", ru:"спорт → физическая активность" },
      { aus:"krank sein", zu:"krankheitsbedingt ausfallen", ru:"болеть → выбывать по болезни" },
      { aus:"Obst", zu:"frische Lebensmittel", ru:"фрукты → свежие продукты" }
    ]},
  { id:"G4", ru:"Экология", de:"Umwelt & Nachhaltigkeit",
    woerter:[
      { de:"die Umwelt schonen", ru:"беречь окружающую среду" },
      { de:"nachhaltig", ru:"экологичный, устойчивый" },
      { de:"der Energieverbrauch", ru:"потребление энергии" },
      { de:"Ressourcen sparen", ru:"экономить ресурсы" },
      { de:"umweltfreundlich", ru:"экологичный" },
      { de:"das Umweltbewusstsein", ru:"экологическое сознание" },
      { de:"der Abfall vermeiden", ru:"избегать отходов" },
      { de:"öffentliche Verkehrsmittel", ru:"общественный транспорт" }
    ],
    synonyme:[
      { aus:"Müll", zu:"der Abfall", ru:"мусор → отходы" },
      { aus:"Energie sparen", zu:"den Energieverbrauch senken", ru:"экономить энергию → снижать энергопотребление" },
      { aus:"weniger heizen", zu:"die Heiztemperatur senken", ru:"меньше топить → снизить температуру отопления" },
      { aus:"das Fahrrad", zu:"ein umweltfreundliches Verkehrsmittel", ru:"велосипед → экологичный транспорт" }
    ]},
  { id:"G5", ru:"Коллектив", de:"Team & Betriebsklima",
    woerter:[
      { de:"der Zusammenhalt", ru:"сплочённость" },
      { de:"das Betriebsklima", ru:"атмосфера на работе" },
      { de:"die Zusammenarbeit", ru:"сотрудничество" },
      { de:"die Wertschätzung", ru:"уважение, признание" },
      { de:"die Motivation", ru:"мотивация" },
      { de:"sich wohlfühlen", ru:"чувствовать себя комфортно" },
      { de:"der Konflikt", ru:"конфликт" },
      { de:"das Miteinander", ru:"общение, совместная жизнь" }
    ],
    synonyme:[
      { aus:"das Team", zu:"die Belegschaft / das Kollegium", ru:"команда → коллектив" },
      { aus:"zusammen essen", zu:"die gemeinsame Mahlzeit", ru:"есть вместе → совместная трапеза" },
      { aus:"die Party", zu:"die Feier", ru:"вечеринка → праздник" },
      { aus:"duzen", zu:"der informelle Umgang", ru:"на «ты» → неформальное общение" }
    ]},
  { id:"G6", ru:"Рабочее место, техника", de:"Arbeitsplatz & Technik",
    woerter:[
      { de:"die Ausstattung", ru:"оснащение" },
      { de:"die Arbeitsabläufe (Pl.)", ru:"рабочие процессы" },
      { de:"die Effizienz", ru:"эффективность" },
      { de:"die Ablenkung", ru:"отвлечение" },
      { de:"der Lärmpegel", ru:"уровень шума" },
      { de:"die Privatsphäre", ru:"личное пространство" },
      { de:"die Digitalisierung", ru:"цифровизация" },
      { de:"die Erreichbarkeit", ru:"доступность, быть на связи" }
    ],
    synonyme:[
      { aus:"das Großraumbüro", zu:"die offene Bürofläche", ru:"опен-спейс → открытое офисное пространство" },
      { aus:"das Handy", zu:"das Mobiltelefon", ru:"телефон → мобильный телефон" },
      { aus:"das Homeoffice", zu:"das mobile Arbeiten", ru:"удалёнка → мобильная работа" },
      { aus:"das Meeting online", zu:"die virtuelle Besprechung", ru:"онлайн-встреча → виртуальное совещание" }
    ]},
  { id:"G7", ru:"Персонал, обучение", de:"Personal & Weiterbildung",
    woerter:[
      { de:"die Weiterbildung", ru:"повышение квалификации" },
      { de:"die Kompetenzen erweitern", ru:"расширять компетенции" },
      { de:"die Qualifikation", ru:"квалификация" },
      { de:"die Einarbeitung", ru:"введение в должность" },
      { de:"die Fachkraft", ru:"специалист" },
      { de:"der Fachkräftemangel", ru:"нехватка специалистов" },
      { de:"beruflich weiterkommen", ru:"продвигаться по работе" },
      { de:"die Betreuung", ru:"опека, сопровождение" }
    ],
    synonyme:[
      { aus:"der Kurs", zu:"die Schulung / die Fortbildung", ru:"курс → обучение, повышение квалификации" },
      { aus:"der Praktikant", zu:"die Nachwuchskraft", ru:"стажёр → молодой специалист" },
      { aus:"lernen", zu:"sich weiterbilden", ru:"учиться → повышать квалификацию" },
      { aus:"der Workshop", zu:"das Seminar", ru:"воркшоп → семинар" }
    ]},
  { id:"G8", ru:"Правила, безопасность", de:"Regeln & Sicherheit",
    woerter:[
      { de:"die Vorschriften einhalten", ru:"соблюдать предписания" },
      { de:"die Kontrolle", ru:"контроль" },
      { de:"das Vertrauen", ru:"доверие" },
      { de:"die Eigenverantwortung", ru:"собственная ответственность" },
      { de:"die Sicherheit am Arbeitsplatz", ru:"безопасность на рабочем месте" },
      { de:"verbindlich", ru:"обязательный (к исполнению)" },
      { de:"die Konsequenzen (Pl.)", ru:"последствия" },
      { de:"die Angst vor Fehlern", ru:"страх ошибок" }
    ],
    synonyme:[
      { aus:"verbieten", zu:"untersagen", ru:"запрещать → не допускать (официально)" },
      { aus:"die Regel", zu:"die Vorgabe", ru:"правило → требование" },
      { aus:"bestrafen", zu:"sanktionieren", ru:"наказывать → применять санкции" },
      { aus:"die Strafe", zu:"die Sanktion", ru:"наказание → санкция" }
    ]},
  { id:"G9", ru:"Еда и перерывы", de:"Essen & Pausen",
    woerter:[
      { de:"die Ernährung", ru:"питание" },
      { de:"die Verpflegung", ru:"питание (на работе), довольствие" },
      { de:"die Mahlzeit", ru:"приём пищи" },
      { de:"das Angebot", ru:"предложение, ассортимент" },
      { de:"die Auswahl", ru:"выбор" },
      { de:"die Essgewohnheiten (Pl.)", ru:"пищевые привычки" },
      { de:"der Pausenraum", ru:"комната отдыха" },
      { de:"sich versorgen", ru:"обеспечивать себя (едой)" }
    ],
    synonyme:[
      { aus:"das Essen", zu:"die Verpflegung", ru:"еда → питание" },
      { aus:"die Kantine", zu:"das Betriebsrestaurant", ru:"столовая → ресторан предприятия" },
      { aus:"vegetarisch", zu:"fleischlos", ru:"вегетарианский → без мяса" },
      { aus:"Süßigkeiten", zu:"süße Snacks", ru:"сладости → сладкие перекусы" }
    ]}
];

/* 30 тем: 28 от Адама + 2 из официальных тестов (★). Для каждой — перефразирование [THEMA] и пример по теме. */
const THEMEN = [
 { n:1,  titel:"Kleiderordnung", typ:"T2", g:"G1", huelle:"Einführung",
   aufgabe:"Alle Mitarbeiter in Ihrer Firma sollen einheitliche Kleidung tragen. Die Reinigungskosten soll aber jeder privat übernehmen.",
   aufgabeRu:"Все сотрудники вашей фирмы должны носить одинаковую одежду. Однако расходы на чистку каждый оплачивает сам.",
   thema:{ de:"die geplante Einführung einer einheitlichen Dienstkleidung", nach:", für deren Reinigung jeder selbst aufkommen soll", ru:"планируемом введении единой рабочей одежды, за чистку которой каждый должен платить сам" },
   folge:{ de:"jeder von uns die Reinigung seiner Dienstkleidung selbst bezahlen müsste", ru:"каждому из нас пришлось бы самому оплачивать чистку рабочей одежды" },
   grund:"belastung", plus:"arbeitgeber" },
 { n:2,  titel:"Samstagsarbeit", typ:"T1", g:"G2", huelle:"Ausweitung",
   aufgabe:"Alle Mitarbeiter in Ihrer Firma sollen in Zukunft auch samstags arbeiten. Es gibt keinen Zuschlag.",
   aufgabeRu:"Все сотрудники вашей фирмы в будущем должны работать и по субботам. Доплаты нет.",
   thema:{ de:"die geplante Ausweitung der Arbeitszeit auf den Samstag", nach:" – und das ohne zusätzlichen Zuschlag", ru:"планируемом расширении рабочего времени на субботу — причём без доплаты" },
   folge:{ de:"viele Kollegen ihre Wochenenden nicht mehr mit der Familie verbringen könnten", ru:"многие коллеги больше не смогли бы проводить выходные с семьёй" },
   grund:"freizeit", plus:"effizienz" },
 { n:3,  titel:"Zeitmanagement", typ:"T1", g:"G7", huelle:"Verpflichtung",
   aufgabe:"Alle Mitarbeiter sollen an einem Workshop für Zeitmanagement teilnehmen.",
   aufgabeRu:"Все сотрудники должны принять участие в семинаре по тайм-менеджменту.",
   thema:{ de:"die geplante Verpflichtung zur Teilnahme an einem Seminar für Zeitmanagement", ru:"планируемой обязанности участвовать в семинаре по тайм-менеджменту" },
   folge:{ de:"wir während des Seminars unsere laufenden Projekte unterbrechen müssten", ru:"нам пришлось бы на время семинара прервать текущие проекты" },
   grund:"kosten", plus:"kompetenz" },
 { n:4,  titel:"Firmenparkplatz gebührenpflichtig", typ:"T2", g:"G1", huelle:"Einführung",
   aufgabe:"Die Mitarbeiter sollen in Zukunft für das Parken auf dem Firmenparkplatz Gebühren zahlen.",
   aufgabeRu:"В будущем сотрудники должны платить за парковку на парковке фирмы.",
   thema:{ de:"die geplante Einführung von Parkgebühren auf dem Firmengelände", ru:"планируемом введении платы за парковку на территории фирмы" },
   folge:{ de:"Kollegen, die auf das Auto angewiesen sind, jeden Monat zusätzlich Geld ausgeben müssten", ru:"коллегам, которые зависят от машины, пришлось бы каждый месяц тратить дополнительные деньги" },
   grund:"belastung", plus:"umwelt" },
 { n:5,  titel:"Rückenfreundliche Bürostühle", typ:"T2", g:"G3", huelle:"Anschaffung",
   aufgabe:"Für alle Mitarbeiter sollen rückenfreundliche Bürostühle angeschafft werden. Die Hälfte der Kosten sollen sie selbst bezahlen.",
   aufgabeRu:"Для всех сотрудников закупят стулья, полезные для спины. Половину стоимости они должны оплатить сами.",
   thema:{ de:"die geplante Anschaffung rückenfreundlicher Bürostühle", nach:", deren Kosten wir zur Hälfte selbst tragen sollen", ru:"планируемой закупке эргономичных стульев, половину стоимости которых мы должны оплатить сами" },
   folge:{ de:"jeder von uns einen großen Teil der Anschaffungskosten aus eigener Tasche bezahlen müsste", ru:"каждому из нас пришлось бы платить из своего кармана большую часть стоимости" },
   grund:"belastung", plus:"gesund" },
 { n:6,  titel:"Jobticket oder Firmenfahrrad", typ:"T4", g:"G4", huelle:"Wahl",
   aufgabe:"Ihr Arbeitgeber möchte allen Mitarbeitern entweder ein Firmenfahrrad oder monatlich einen 50-Euro-Zuschuss zum Jobticket geben.",
   aufgabeRu:"Работодатель хочет дать всем сотрудникам либо служебный велосипед, либо ежемесячную доплату 50 евро к проездному.",
   thema:{ de:"die Wahl zwischen einem Firmenfahrrad und einem monatlichen Zuschuss zum Jobticket", ru:"выборе между служебным велосипедом и ежемесячной доплатой к проездному" },
   wahlA:{ de:"den Zuschuss zum Jobticket", ru:"доплату к проездному" },
   wahlB:{ de:"das Firmenfahrrad", ru:"служебный велосипед" },
   folge:{ de:"auch Kollegen mit einem langen Arbeitsweg bei jedem Wetter bequem zur Arbeit kommen könnten", ru:"и коллеги с долгой дорогой могли бы в любую погоду удобно добираться до работы" },
   grund:"pro2", plus:"gesund" },
 { n:7,  titel:"Computerkurs außerhalb der Arbeitszeit", typ:"T1", g:"G7", huelle:"Verpflichtung",
   aufgabe:"Alle Mitarbeiter sollen einen verpflichtenden Computerkurs außerhalb der Arbeitszeit besuchen. Die Firma übernimmt die Kosten.",
   aufgabeRu:"Все сотрудники должны пройти обязательный компьютерный курс вне рабочего времени. Расходы берёт на себя фирма.",
   thema:{ de:"die geplante Verpflichtung zu einer Computerschulung außerhalb der Arbeitszeit", ru:"планируемой обязанности проходить компьютерное обучение вне рабочего времени" },
   folge:{ de:"viele Kollegen nach Feierabend noch zusätzlich lernen müssten", ru:"многим коллегам пришлось бы после работы ещё и учиться" },
   grund:"freizeit", plus:"kompetenz" },
 { n:8,  titel:"Alle duzen", typ:"T6", g:"G5", huelle:"Einführung",
   aufgabe:"Für ein besseres Betriebsklima sollen sich zukünftig alle duzen – auch Vorgesetzte und Kunden.",
   aufgabeRu:"Для лучшей атмосферы в будущем все должны обращаться друг к другу на «ты» — в том числе к начальству и клиентам.",
   thema:{ de:"die geplante Einführung des Duzens für alle", nach:" – auch gegenüber Vorgesetzten und Kunden", ru:"планируемом переходе всех на «ты» — в том числе с начальством и клиентами" },
   folge:{ de:"wir auch langjährige Kunden plötzlich duzen müssten, was unprofessionell wirken könnte", ru:"нам пришлось бы вдруг говорить «ты» давним клиентам, что могло бы выглядеть непрофессионально" },
   grund:"integr", plus:"team" },
 { n:9,  titel:"Verpflichtende Teamsitzungen ★", typ:"T1", g:"G5", huelle:"Verpflichtung",
   aufgabe:"Alle Mitarbeiter sollen verpflichtet werden, an regelmäßigen Teamsitzungen teilzunehmen, auch wenn diese außerhalb ihrer Arbeitszeit stattfinden.",
   aufgabeRu:"Всех сотрудников обяжут участвовать в регулярных собраниях команды, даже если они проходят вне рабочего времени.",
   thema:{ de:"die geplante Verpflichtung zur Teilnahme an regelmäßigen Teamsitzungen außerhalb der Arbeitszeit", ru:"планируемой обязанности участвовать в регулярных собраниях вне рабочего времени" },
   folge:{ de:"viele Kollegen ihre Abende nicht mehr frei planen könnten", ru:"многие коллеги больше не могли бы свободно планировать вечера" },
   grund:"freizeit", plus:"team" },
 { n:10, titel:"Firmenhandy für alle ★", typ:"T1", g:"G6", huelle:"Ausstattung",
   aufgabe:"Alle Mitarbeiter sollen ein Firmenhandy bekommen, damit sie immer erreichbar sind – auch am Abend und an den Wochenenden.",
   aufgabeRu:"Все сотрудники получат служебный телефон, чтобы всегда быть на связи — и вечером, и в выходные.",
   thema:{ de:"die geplante Ausstattung aller Mitarbeiter mit einem Firmenhandy", nach:", über das wir ständig erreichbar sein sollen", ru:"планируемом оснащении всех сотрудников служебным телефоном, по которому мы должны быть постоянно на связи" },
   folge:{ de:"wir auch abends und am Wochenende jederzeit mit Anrufen rechnen müssten", ru:"нам пришлось бы и вечером, и в выходные в любой момент ждать звонков" },
   grund:"freizeit", plus:"effizienz" },
 { n:11, titel:"Weniger Müll im Betrieb", typ:"T3", g:"G4", huelle:"Abschaffung",
   aufgabe:"Die Mitarbeiter sollen Verpackungsmüll sparen. Es gibt neue Kühlschränke und Mikrowellen. Alle Snackautomaten sollen entfernt werden.",
   aufgabeRu:"Сотрудники должны производить меньше упаковочного мусора. Есть новые холодильники и микроволновки. Все автоматы со снеками уберут.",
   thema:{ de:"die geplante Abschaffung der Snackautomaten zugunsten von Kühlschränken und Mikrowellen", ru:"планируемом удалении автоматов со снеками в пользу холодильников и микроволновок" },
   folge:{ de:"Kollegen ohne Zeit zum Kochen kaum noch eine schnelle Möglichkeit hätten, sich zu versorgen", ru:"у коллег без времени на готовку почти не осталось бы возможности быстро перекусить" },
   grund:"flex", plus:"umwelt" },
 { n:12, titel:"Mehr Lohn oder Urlaubstage", typ:"T4", g:"G1", huelle:"Wahl",
   aufgabe:"Für mehr Zufriedenheit soll es entweder etwas mehr Lohn oder zwei zusätzliche Urlaubstage für alle geben.",
   aufgabeRu:"Для большей удовлетворённости всем дадут либо немного больше зарплаты, либо два дополнительных дня отпуска.",
   thema:{ de:"die Wahl zwischen einer Gehaltserhöhung und zwei zusätzlichen Urlaubstagen", ru:"выборе между повышением зарплаты и двумя дополнительными днями отпуска" },
   wahlA:{ de:"die zusätzlichen Urlaubstage", ru:"дополнительные дни отпуска" },
   wahlB:{ de:"die Gehaltserhöhung", ru:"повышение зарплаты" },
   folge:{ de:"sich alle Kollegen nach den stressigen Projekten besser erholen könnten", ru:"все коллеги лучше отдыхали бы после напряжённых проектов" },
   grund:"pro1", plus:"entlastung" },
 { n:13, titel:"Ein großer Drucker pro Etage", typ:"T6", g:"G6", huelle:"Abschaffung",
   aufgabe:"Alle Drucker in den Büros sollen abgeschafft werden, stattdessen soll es pro Etage einen großen Drucker auf dem Flur geben.",
   aufgabeRu:"Все принтеры в кабинетах уберут, вместо этого на каждом этаже в коридоре будет один большой принтер.",
   thema:{ de:"die geplante Abschaffung der Bürodrucker zugunsten eines großen Druckers pro Etage", ru:"планируемой отмене принтеров в кабинетах в пользу одного большого принтера на этаж" },
   folge:{ de:"wir für jeden Ausdruck unseren Arbeitsplatz verlassen müssten", ru:"нам пришлось бы ради каждой распечатки уходить с рабочего места" },
   grund:"integr", plus:"sparen" },
 { n:14, titel:"Freizeitausgleich statt Bezahlung", typ:"T3", g:"G2", huelle:"Abschaffung",
   aufgabe:"Überstunden können ab sofort nur noch als Freizeit ausgeglichen werden. Die Auszahlung ist nicht mehr erlaubt.",
   aufgabeRu:"Сверхурочные с этого момента можно компенсировать только отгулами. Выплата больше не разрешена.",
   thema:{ de:"die geplante Abschaffung der Auszahlung von Überstunden zugunsten eines reinen Freizeitausgleichs", ru:"планируемой отмене выплат за сверхурочные в пользу компенсации только отгулами" },
   folge:{ de:"Kollegen, die auf das zusätzliche Geld angewiesen sind, spürbare finanzielle Einbußen hätten", ru:"коллеги, которые зависят от дополнительных денег, ощутимо потеряли бы в доходе" },
   grund:"flex", plus:"erholung" },
 { n:15, titel:"Energie sparen", typ:"T3", g:"G4", huelle:"Senkung",
   aufgabe:"Es soll nicht mehr so viel geheizt werden. Wenn es kalt ist, können die Mitarbeiter in Winterkleidung arbeiten.",
   aufgabeRu:"Будут меньше топить. Если холодно, сотрудники могут работать в зимней одежде.",
   thema:{ de:"die geplante Senkung der Heiztemperatur im Büro", nach:", bei der wir notfalls in Winterkleidung arbeiten sollen", ru:"планируемом снижении температуры отопления в офисе, при котором нам в случае чего предлагают работать в зимней одежде" },
   folge:{ de:"wir bei niedrigen Temperaturen kaum konzentriert arbeiten könnten", ru:"при низкой температуре мы вряд ли могли бы работать сосредоточенно" },
   grund:"flex", plus:"umwelt" },
 { n:16, titel:"Vegetarische Küche", typ:"T3", g:"G9", huelle:"Umstellung",
   aufgabe:"In der Betriebskantine soll nur noch vegetarisches Essen angeboten werden. Wer Fleisch essen möchte, muss es von zu Hause mitbringen.",
   aufgabeRu:"В столовой будут предлагать только вегетарианскую еду. Кто хочет мяса — приносит еду из дома.",
   thema:{ de:"die geplante Umstellung unserer Kantine auf ein rein vegetarisches Angebot", ru:"планируемом переходе нашей столовой на чисто вегетарианское меню" },
   folge:{ de:"alle, die Fleisch essen möchten, ihr Essen künftig von zu Hause mitbringen müssten", ru:"всем, кто хочет есть мясо, впредь пришлось бы приносить еду из дома" },
   grund:"flex", plus:"gesund" },
 { n:17, titel:"Gemeinsames Mittagessen", typ:"T2", g:"G5", huelle:"Einführung",
   aufgabe:"Jeden Freitag soll das Mittagessen von einem Cateringservice geliefert werden. Die Kosten sollen die Angestellten tragen.",
   aufgabeRu:"Каждую пятницу обед будет доставлять кейтеринговая служба. Расходы несут сотрудники.",
   thema:{ de:"die geplante Einführung eines gemeinsamen Mittagessens", nach:", dessen Kosten wir jeden Freitag selbst tragen sollen", ru:"планируемом введении совместного обеда, расходы на который мы должны каждую пятницу нести сами" },
   folge:{ de:"jeder von uns jeden Freitag für ein Essen zahlen müsste, das er sich nicht selbst ausgesucht hat", ru:"каждому пришлось бы по пятницам платить за еду, которую он сам не выбирал" },
   grund:"belastung", plus:"team" },
 { n:18, titel:"Obst statt Süßigkeiten", typ:"T3", g:"G3", huelle:"Umstellung",
   aufgabe:"Im Pausenraum soll es keine Süßigkeiten mehr geben. Stattdessen gibt es frisches Obst.",
   aufgabeRu:"В комнате отдыха больше не будет сладостей. Вместо них — свежие фрукты.",
   thema:{ de:"die geplante Umstellung im Pausenraum von süßen Snacks auf frisches Obst", ru:"планируемой замене сладостей в комнате отдыха на свежие фрукты" },
   folge:{ de:"Kollegen ihre kleinen Belohnungen im Arbeitsalltag künftig selbst kaufen müssten", ru:"коллегам впредь пришлось бы самим покупать свои маленькие радости в течение дня" },
   grund:"flex", plus:"gesund" },
 { n:19, titel:"Betriebskindergarten", typ:"T5", g:"G7", huelle:"Einrichtung",
   aufgabe:"Ab September soll ein Betriebskindergarten mit 25 Plätzen eingeführt werden.",
   aufgabeRu:"С сентября откроют корпоративный детский сад на 25 мест.",
   thema:{ de:"die geplante Einrichtung eines Betriebskindergartens mit 25 Plätzen", ru:"планируемом открытии корпоративного детского сада на 25 мест" },
   folge:{ de:"ein großer Teil des Budgets nur den Kollegen mit kleinen Kindern zugutekäme", ru:"значительная часть бюджета пошла бы на пользу только коллегам с маленькими детьми" },
   grund:"kosten", plus:"arbeitgeber" },
 { n:20, titel:"Geburtstag des Geschäftsführers", typ:"T2", g:"G5", huelle:"—",
   aufgabe:"Für den Geburtstag des Geschäftsführers soll eine große Party organisiert werden. Jeder soll 50 Euro beitragen.",
   aufgabeRu:"На день рождения директора устроят большую вечеринку. Каждый должен внести 50 евро.",
   thema:{ de:"die geplante Feier zum Geburtstag des Geschäftsführers", nach:", für die jeder 50 Euro beisteuern soll", ru:"планируемом праздновании дня рождения директора, на который каждый должен внести 50 евро" },
   folge:{ de:"gerade Kollegen mit geringerem Einkommen sich unter Druck gesetzt fühlen könnten", ru:"именно коллеги с меньшим доходом могли бы почувствовать давление" },
   grund:"belastung", plus:"team" },
 { n:21, titel:"Bonus ohne Krankheitstage", typ:"T5", g:"G3", huelle:"Einführung",
   aufgabe:"Mitarbeiter, die im ganzen Jahr an keinem Tag krankheitsbedingt gefehlt haben, sollen einen Bonus bekommen.",
   aufgabeRu:"Сотрудники, которые за весь год ни дня не пропустили по болезни, получат премию.",
   thema:{ de:"die geplante Einführung eines Bonus für alle", nach:", die im ganzen Jahr keinen Tag krankheitsbedingt gefehlt haben", ru:"планируемом введении премии для всех, кто за год ни дня не пропустил по болезни" },
   folge:{ de:"manche Kollegen sogar krank zur Arbeit kommen würden, um den Bonus nicht zu verlieren", ru:"некоторые коллеги приходили бы на работу даже больными, чтобы не потерять премию" },
   grund:"druck", plus:"arbeitgeber" },
 { n:22, titel:"Kürzere Mittagspause", typ:"T3", g:"G9", huelle:"Verkürzung",
   aufgabe:"Die Mittagspause soll statt einer Stunde nur noch 30 Minuten betragen. Dafür haben die Mitarbeiter früher Feierabend.",
   aufgabeRu:"Обеденный перерыв будет длиться не час, а только 30 минут. Зато сотрудники раньше уходят домой.",
   thema:{ de:"die geplante Verkürzung der Mittagspause von einer Stunde auf 30 Minuten", ru:"планируемом сокращении обеденного перерыва с часа до 30 минут" },
   folge:{ de:"uns kaum noch Zeit bliebe, in Ruhe zu essen und uns zu erholen", ru:"у нас почти не оставалось бы времени спокойно поесть и отдохнуть" },
   grund:"flex", plus:"erholung" },
 { n:23, titel:"Meetings online", typ:"T6", g:"G6", huelle:"Umstellung",
   aufgabe:"Um Zeit und Kosten zu sparen, sollen Meetings nur noch online stattfinden.",
   aufgabeRu:"Чтобы сэкономить время и деньги, совещания будут проходить только онлайн.",
   thema:{ de:"die geplante Umstellung aller Besprechungen auf ein reines Online-Format", ru:"планируемом переводе всех совещаний в чисто онлайн-формат" },
   folge:{ de:"der persönliche Austausch mit den Kollegen fast vollständig verloren ginge", ru:"живое общение с коллегами почти полностью исчезло бы" },
   grund:"integr", plus:"sparen" },
 { n:24, titel:"Mehr Praktikanten", typ:"T6", g:"G7", huelle:"Einstellung",
   aufgabe:"Da es viel zu tun gibt, sollen in Zukunft mehr Praktikanten eingestellt werden.",
   aufgabeRu:"Так как работы много, в будущем будут нанимать больше стажёров.",
   thema:{ de:"die geplante Einstellung zusätzlicher Praktikanten", ru:"планируемом найме дополнительных стажёров" },
   folge:{ de:"erfahrene Kollegen einen großen Teil ihrer Zeit mit der Einarbeitung verbringen müssten", ru:"опытным коллегам пришлось бы тратить много времени на введение новичков в работу" },
   grund:"mehraufwand", plus:"kompetenz" },
 { n:25, titel:"Klassische Musik", typ:"T6", g:"G3", huelle:"Einführung",
   aufgabe:"In allen Büros soll während der Arbeit klassische Musik gespielt werden, damit sich die Mitarbeiter wohler fühlen.",
   aufgabeRu:"Во всех офисах во время работы будет играть классическая музыка, чтобы сотрудники чувствовали себя комфортнее.",
   thema:{ de:"die geplante Einführung klassischer Musik in allen Büros während der Arbeitszeit", ru:"планируемом введении классической музыки во всех офисах в рабочее время" },
   folge:{ de:"konzentriertes Arbeiten und Telefonate mit Kunden deutlich schwieriger würden", ru:"сосредоточенная работа и звонки клиентам стали бы заметно сложнее" },
   grund:"integr", plus:"gesund" },
 { n:26, titel:"Bürogestaltung: Großraumbüro ★", typ:"T6", g:"G6", huelle:"Umstellung",
   aufgabe:"In Ihrer Firma soll im Großraumbüro gearbeitet werden. Die Geschäftsführung meint, offene Räume sind gut für das Arbeitsklima.",
   aufgabeRu:"В вашей фирме будут работать в опен-спейсе. Руководство считает, что открытые пространства хороши для атмосферы.",
   thema:{ de:"die geplante Umstellung auf ein Großraumbüro", ru:"планируемом переходе на опен-спейс" },
   folge:{ de:"der Lärmpegel steigen und die Privatsphäre am Arbeitsplatz verloren gehen würde", ru:"вырос бы уровень шума и пропало бы личное пространство на рабочем месте" },
   grund:"integr", plus:"team" },
 { n:27, titel:"Mitarbeit im Firmengarten", typ:"T1", g:"G4", huelle:"—",
   aufgabe:"Die Mitarbeiter sollen in ihrer Freizeit beim Anlegen und Pflegen eines Firmengartens mithelfen.",
   aufgabeRu:"Сотрудники должны в свободное время помогать обустраивать корпоративный сад и ухаживать за ним.",
   thema:{ de:"die geplante Mitarbeit im neuen Firmengarten", nach:", die in unserer Freizeit stattfinden soll", ru:"планируемой работе в новом корпоративном саду, которая должна проходить в наше свободное время" },
   folge:{ de:"wir nach Feierabend noch Beete anlegen und pflegen müssten", ru:"нам пришлось бы после работы ещё сажать и пропалывать грядки" },
   grund:"freizeit", plus:"umwelt" },
 { n:28, titel:"Verstöße gegen die Sicherheitsvorschriften", typ:"T3", g:"G8", huelle:"—",
   aufgabe:"Es gab in letzter Zeit immer wieder Verstöße gegen die Sicherheitsvorschriften. Sie sollen in Zukunft streng bestraft werden.",
   aufgabeRu:"В последнее время постоянно нарушают правила техники безопасности. В будущем за это будут строго наказывать.",
   thema:{ de:"die geplante strenge Bestrafung von Verstößen gegen die Sicherheitsvorschriften", ru:"планируемом строгом наказании за нарушения правил техники безопасности" },
   folge:{ de:"eine Atmosphäre der Angst entstehen würde, in der Fehler eher verschwiegen werden", ru:"возникла бы атмосфера страха, в которой об ошибках скорее промолчат" },
   grund:"druck", plus:"sicher" },
 { n:29, titel:"Betriebliche Kinderbetreuung ★", typ:"T2", g:"G1", huelle:"Streichung",
   aufgabe:"Die Mitarbeiter sollen ab dem nächsten Jahr kein Urlaubsgeld mehr bekommen, um die Einrichtung einer betriebseigenen Kita zu finanzieren.",
   aufgabeRu:"Со следующего года сотрудники больше не будут получать отпускные, чтобы профинансировать собственный детсад фирмы.",
   thema:{ de:"die geplante Streichung des Urlaubsgeldes zur Finanzierung einer betriebseigenen Kita", ru:"планируемой отмене отпускных ради финансирования собственного детсада фирмы" },
   folge:{ de:"alle Kollegen auf einen Teil ihres Einkommens verzichten müssten, obwohl nur wenige die Kita nutzen würden", ru:"всем коллегам пришлось бы отказаться от части дохода, хотя детсадом пользовались бы немногие" },
   grund:"belastung", plus:"arbeitgeber" },
 { n:30, titel:"Zigarettenpausen ★", typ:"T3", g:"G8", huelle:"Beschränkung",
   aufgabe:"Die Mitarbeiter dürfen ab sofort nur noch während der geregelten Pausenzeiten rauchen. Zusätzliche Zigarettenpausen sind nicht mehr erlaubt.",
   aufgabeRu:"С этого момента курить можно только в официальные перерывы. Дополнительные перекуры больше не разрешены.",
   thema:{ de:"die geplante Beschränkung der Raucherpausen auf die regulären Pausenzeiten", ru:"планируемом ограничении перекуров только официальными перерывами" },
   folge:{ de:"rauchende Kollegen sich stundenlang keine kurze Auszeit mehr nehmen könnten", ru:"курящие коллеги часами не могли бы позволить себе короткую передышку" },
   grund:"flex", plus:"gesund" }
];



/* Образцы текстов — собраны автоматически из блоков (muster_fb.js) */
const MUSTER = [
 {
  "n": 0,
  "titel": "Текст-джокер",
  "typ": "—",
  "g": "—",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante […ung] + [чего]⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом [введении / отмене …] + [чего]⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦sich unsere tägliche Arbeit spürbar verschlechtern würde⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦наша ежедневная работа заметно ухудшилась бы⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 210
 },
 {
  "n": 1,
  "titel": "Kleiderordnung",
  "typ": "T2",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einführung einer einheitlichen Dienstkleidung⟧ gestritten⟦, für deren Reinigung jeder selbst aufkommen soll⟧.",
    "ru": "В команде спорят о ⟦планируемом введении единой рабочей одежды, за чистку которой каждый должен платить сам⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦jeder von uns die Reinigung seiner Dienstkleidung selbst bezahlen müsste⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦каждому из нас пришлось бы самому оплачивать чистку рабочей одежды⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 219
 },
 {
  "n": 2,
  "titel": "Samstagsarbeit",
  "typ": "T1",
  "g": "G2",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Ausweitung der Arbeitszeit auf den Samstag⟧ gestritten⟦ – und das ohne zusätzlichen Zuschlag⟧.",
    "ru": "В команде спорят о ⟦планируемом расширении рабочего времени на субботу — причём без доплаты⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦viele Kollegen ihre Wochenenden nicht mehr mit der Familie verbringen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦многие коллеги больше не смогли бы проводить выходные с семьёй⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦Arbeitsabläufe effizienter gestaltet werden können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦рабочие процессы можно организовать эффективнее⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 216
 },
 {
  "n": 3,
  "titel": "Zeitmanagement",
  "typ": "T1",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Verpflichtung zur Teilnahme an einem Seminar für Zeitmanagement⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой обязанности участвовать в семинаре по тайм-менеджменту⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir während des Seminars unsere laufenden Projekte unterbrechen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы на время семинара прервать текущие проекты⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter ihre Kompetenzen erweitern können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦сотрудники могут расширить свои компетенции⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 213
 },
 {
  "n": 4,
  "titel": "Firmenparkplatz gebührenpflichtig",
  "typ": "T2",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einführung von Parkgebühren auf dem Firmengelände⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом введении платы за парковку на территории фирмы⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen, die auf das Auto angewiesen sind, jeden Monat zusätzlich Geld ausgeben müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦коллегам, которые зависят от машины, пришлось бы каждый месяц тратить дополнительные деньги⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 221
 },
 {
  "n": 5,
  "titel": "Rückenfreundliche Bürostühle",
  "typ": "T2",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Anschaffung rückenfreundlicher Bürostühle⟧ gestritten⟦, deren Kosten wir zur Hälfte selbst tragen sollen⟧.",
    "ru": "В команде спорят о ⟦планируемой закупке эргономичных стульев, половину стоимости которых мы должны оплатить сами⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦jeder von uns einen großen Teil der Anschaffungskosten aus eigener Tasche bezahlen müsste⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦каждому из нас пришлось бы платить из своего кармана большую часть стоимости⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 218
 },
 {
  "n": 6,
  "titel": "Jobticket oder Firmenfahrrad",
  "typ": "T4",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die Wahl zwischen einem Firmenfahrrad und einem monatlichen Zuschuss zum Jobticket⟧ gestritten.",
    "ru": "В команде спорят о ⟦выборе между служебным велосипедом и ежемесячной доплатой к проездному⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich persönlich würde mich eindeutig für ⟦den Zuschuss zum Jobticket⟧ entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
    "ru": "Я бы однозначно выбрал ⟦доплату к проездному⟧, так как этот вариант положительно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Vorteil ist, dass ⟦alle Kollegen gleichermaßen davon profitieren können⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенное преимущество в том, что ⟦все коллеги могут в равной мере извлечь из этого пользу⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte diese Lösung von vielen Kollegen als fairer empfunden werden.",
    "ru": "Кроме того, многие коллеги могли бы воспринять это решение как более справедливое."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Variante bereits getestet und sehr gute Ergebnisse erzielt. Insofern spiegelt dies einen positiven Trend wider, da sich immer mehr Unternehmen dafür entscheiden.",
    "ru": "Например, одна компания уже опробовала этот вариант и добилась очень хороших результатов. В этом смысле это отражает положительную тенденцию, так как всё больше компаний выбирают его."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦auch Kollegen mit einem langen Arbeitsweg bei jedem Wetter bequem zur Arbeit kommen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦и коллеги с долгой дорогой могли бы в любую погоду удобно добираться до работы⟧."
   },
   {
    "id": "9",
    "de": "Jedoch spricht auch einiges für ⟦das Firmenfahrrad⟧: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако кое-что говорит и в пользу ⟦служебный велосипед⟧: возможное преимущество, вероятно, в том, что ⟦укрепляется здоровье сотрудников⟧."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 187
 },
 {
  "n": 7,
  "titel": "Computerkurs außerhalb der Arbeitszeit",
  "typ": "T1",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Verpflichtung zu einer Computerschulung außerhalb der Arbeitszeit⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой обязанности проходить компьютерное обучение вне рабочего времени⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦viele Kollegen nach Feierabend noch zusätzlich lernen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦многим коллегам пришлось бы после работы ещё и учиться⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter ihre Kompetenzen erweitern können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦сотрудники могут расширить свои компетенции⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 209
 },
 {
  "n": 8,
  "titel": "Alle duzen",
  "typ": "T6",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einführung des Duzens für alle⟧ gestritten⟦ – auch gegenüber Vorgesetzten und Kunden⟧.",
    "ru": "В команде спорят о ⟦планируемом переходе всех на «ты» — в том числе с начальством и клиентами⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦это изменение трудно встроить в наши повседневные рабочие процессы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir auch langjährige Kunden plötzlich duzen müssten, was unprofessionell wirken könnte⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы вдруг говорить «ты» давним клиентам, что могло бы выглядеть непрофессионально⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 218
 },
 {
  "n": 9,
  "titel": "Verpflichtende Teamsitzungen ★",
  "typ": "T1",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Verpflichtung zur Teilnahme an regelmäßigen Teamsitzungen außerhalb der Arbeitszeit⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой обязанности участвовать в регулярных собраниях вне рабочего времени⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦viele Kollegen ihre Abende nicht mehr frei planen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦многие коллеги больше не могли бы свободно планировать вечера⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 212
 },
 {
  "n": 10,
  "titel": "Firmenhandy für alle ★",
  "typ": "T1",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Ausstattung aller Mitarbeiter mit einem Firmenhandy⟧ gestritten⟦, über das wir ständig erreichbar sein sollen⟧.",
    "ru": "В команде спорят о ⟦планируемом оснащении всех сотрудников служебным телефоном, по которому мы должны быть постоянно на связи⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir auch abends und am Wochenende jederzeit mit Anrufen rechnen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы и вечером, и в выходные в любой момент ждать звонков⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦Arbeitsabläufe effizienter gestaltet werden können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦рабочие процессы можно организовать эффективнее⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 217
 },
 {
  "n": 11,
  "titel": "Weniger Müll im Betrieb",
  "typ": "T3",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Abschaffung der Snackautomaten zugunsten von Kühlschränken und Mikrowellen⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом удалении автоматов со снеками в пользу холодильников и микроволновок⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen ohne Zeit zum Kochen kaum noch eine schnelle Möglichkeit hätten, sich zu versorgen⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦у коллег без времени на готовку почти не осталось бы возможности быстро перекусить⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 223
 },
 {
  "n": 12,
  "titel": "Mehr Lohn oder Urlaubstage",
  "typ": "T4",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die Wahl zwischen einer Gehaltserhöhung und zwei zusätzlichen Urlaubstagen⟧ gestritten.",
    "ru": "В команде спорят о ⟦выборе между повышением зарплаты и двумя дополнительными днями отпуска⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich persönlich würde mich eindeutig für ⟦die zusätzlichen Urlaubstage⟧ entscheiden, da diese Variante unser Arbeitsumfeld positiv beeinflusst.",
    "ru": "Я бы однозначно выбрал ⟦дополнительные дни отпуска⟧, так как этот вариант положительно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Vorteil ist, dass ⟦diese Variante den Bedürfnissen der meisten Kollegen besser entspricht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенное преимущество в том, что ⟦этот вариант лучше отвечает потребностям большинства коллег⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte diese Lösung von vielen Kollegen als fairer empfunden werden.",
    "ru": "Кроме того, многие коллеги могли бы воспринять это решение как более справедливое."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Variante bereits getestet und sehr gute Ergebnisse erzielt. Insofern spiegelt dies einen positiven Trend wider, da sich immer mehr Unternehmen dafür entscheiden.",
    "ru": "Например, одна компания уже опробовала этот вариант и добилась очень хороших результатов. В этом смысле это отражает положительную тенденцию, так как всё больше компаний выбирают его."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦sich alle Kollegen nach den stressigen Projekten besser erholen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦все коллеги лучше отдыхали бы после напряжённых проектов⟧."
   },
   {
    "id": "9",
    "de": "Jedoch spricht auch einiges für ⟦die Gehaltserhöhung⟧: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter finanziell entlastet werden⟧.",
    "ru": "Однако кое-что говорит и в пользу ⟦повышение зарплаты⟧: возможное преимущество, вероятно, в том, что ⟦сотрудники получают финансовое облегчение⟧."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 182
 },
 {
  "n": 13,
  "titel": "Ein großer Drucker pro Etage",
  "typ": "T6",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Abschaffung der Bürodrucker zugunsten eines großen Druckers pro Etage⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой отмене принтеров в кабинетах в пользу одного большого принтера на этаж⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦это изменение трудно встроить в наши повседневные рабочие процессы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir für jeden Ausdruck unseren Arbeitsplatz verlassen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы ради каждой распечатки уходить с рабочего места⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Firma langfristig Kosten sparen kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦фирма в долгосрочной перспективе может сэкономить⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 213
 },
 {
  "n": 14,
  "titel": "Freizeitausgleich statt Bezahlung",
  "typ": "T3",
  "g": "G2",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Abschaffung der Auszahlung von Überstunden zugunsten eines reinen Freizeitausgleichs⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой отмене выплат за сверхурочные в пользу компенсации только отгулами⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen, die auf das zusätzliche Geld angewiesen sind, spürbare finanzielle Einbußen hätten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦коллеги, которые зависят от дополнительных денег, ощутимо потеряли бы в доходе⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter mehr Zeit zur Erholung haben⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦у сотрудников больше времени на отдых⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 215
 },
 {
  "n": 15,
  "titel": "Energie sparen",
  "typ": "T3",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Senkung der Heiztemperatur im Büro⟧ gestritten⟦, bei der wir notfalls in Winterkleidung arbeiten sollen⟧.",
    "ru": "В команде спорят о ⟦планируемом снижении температуры отопления в офисе, при котором нам в случае чего предлагают работать в зимней одежде⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir bei niedrigen Temperaturen kaum konzentriert arbeiten könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦при низкой температуре мы вряд ли могли бы работать сосредоточенно⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 222
 },
 {
  "n": 16,
  "titel": "Vegetarische Küche",
  "typ": "T3",
  "g": "G9",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung unserer Kantine auf ein rein vegetarisches Angebot⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом переходе нашей столовой на чисто вегетарианское меню⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦alle, die Fleisch essen möchten, ihr Essen künftig von zu Hause mitbringen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦всем, кто хочет есть мясо, впредь пришлось бы приносить еду из дома⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 214
 },
 {
  "n": 17,
  "titel": "Gemeinsames Mittagessen",
  "typ": "T2",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einführung eines gemeinsamen Mittagessens⟧ gestritten⟦, dessen Kosten wir jeden Freitag selbst tragen sollen⟧.",
    "ru": "В команде спорят о ⟦планируемом введении совместного обеда, расходы на который мы должны каждую пятницу нести сами⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦jeder von uns jeden Freitag für ein Essen zahlen müsste, das er sich nicht selbst ausgesucht hat⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦каждому пришлось бы по пятницам платить за еду, которую он сам не выбирал⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 223
 },
 {
  "n": 18,
  "titel": "Obst statt Süßigkeiten",
  "typ": "T3",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung im Pausenraum von süßen Snacks auf frisches Obst⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой замене сладостей в комнате отдыха на свежие фрукты⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦Kollegen ihre kleinen Belohnungen im Arbeitsalltag künftig selbst kaufen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦коллегам впредь пришлось бы самим покупать свои маленькие радости в течение дня⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 212
 },
 {
  "n": 19,
  "titel": "Betriebskindergarten",
  "typ": "T5",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einrichtung eines Betriebskindergartens mit 25 Plätzen⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом открытии корпоративного детского сада на 25 мест⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Umsetzung große finanzielle Mittel und einen hohen organisatorischen Aufwand erfordert⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦реализация требует больших финансовых средств и высоких организационных затрат⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦ein großer Teil des Budgets nur den Kollegen mit kleinen Kindern zugutekäme⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦значительная часть бюджета пошла бы на пользу только коллегам с маленькими детьми⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 218
 },
 {
  "n": 20,
  "titel": "Geburtstag des Geschäftsführers",
  "typ": "T2",
  "g": "G5",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Feier zum Geburtstag des Geschäftsführers⟧ gestritten⟦, für die jeder 50 Euro beisteuern soll⟧.",
    "ru": "В команде спорят о ⟦планируемом праздновании дня рождения директора, на который каждый должен внести 50 евро⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦gerade Kollegen mit geringerem Einkommen sich unter Druck gesetzt fühlen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦именно коллеги с меньшим доходом могли бы почувствовать давление⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 217
 },
 {
  "n": 21,
  "titel": "Bonus ohne Krankheitstage",
  "typ": "T5",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einführung eines Bonus für alle⟧ gestritten⟦, die im ganzen Jahr keinen Tag krankheitsbedingt gefehlt haben⟧.",
    "ru": "В команде спорят о ⟦планируемом введении премии для всех, кто за год ни дня не пропустил по болезни⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Druck auf die Mitarbeiter entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого на сотрудников ложится сильное давление⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦manche Kollegen sogar krank zur Arbeit kommen würden, um den Bonus nicht zu verlieren⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦некоторые коллеги приходили бы на работу даже больными, чтобы не потерять премию⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 225
 },
 {
  "n": 22,
  "titel": "Kürzere Mittagspause",
  "typ": "T3",
  "g": "G9",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Verkürzung der Mittagspause von einer Stunde auf 30 Minuten⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом сокращении обеденного перерыва с часа до 30 минут⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦uns kaum noch Zeit bliebe, in Ruhe zu essen und uns zu erholen⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦у нас почти не оставалось бы времени спокойно поесть и отдохнуть⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter mehr Zeit zur Erholung haben⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦у сотрудников больше времени на отдых⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 216
 },
 {
  "n": 23,
  "titel": "Meetings online",
  "typ": "T6",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung aller Besprechungen auf ein reines Online-Format⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом переводе всех совещаний в чисто онлайн-формат⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦это изменение трудно встроить в наши повседневные рабочие процессы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦der persönliche Austausch mit den Kollegen fast vollständig verloren ginge⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦живое общение с коллегами почти полностью исчезло бы⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Firma langfristig Kosten sparen kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦фирма в долгосрочной перспективе может сэкономить⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 213
 },
 {
  "n": 24,
  "titel": "Mehr Praktikanten",
  "typ": "T6",
  "g": "G7",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einstellung zusätzlicher Praktikanten⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом найме дополнительных стажёров⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Mehraufwand für die Kollegen entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого у коллег появляется много дополнительной работы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦erfahrene Kollegen einen großen Teil ihrer Zeit mit der Einarbeitung verbringen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦опытным коллегам пришлось бы тратить много времени на введение новичков в работу⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Mitarbeiter ihre Kompetenzen erweitern können⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦сотрудники могут расширить свои компетенции⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 208
 },
 {
  "n": 25,
  "titel": "Klassische Musik",
  "typ": "T6",
  "g": "G3",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Einführung klassischer Musik in allen Büros während der Arbeitszeit⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом введении классической музыки во всех офисах в рабочее время⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦это изменение трудно встроить в наши повседневные рабочие процессы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦konzentriertes Arbeiten und Telefonate mit Kunden deutlich schwieriger würden⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦сосредоточенная работа и звонки клиентам стали бы заметно сложнее⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 214
 },
 {
  "n": 26,
  "titel": "Bürogestaltung: Großraumbüro ★",
  "typ": "T6",
  "g": "G6",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Umstellung auf ein Großraumbüro⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом переходе на опен-спейс⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦sich diese Veränderung nur schwer in unsere täglichen Abläufe integrieren lässt⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦это изменение трудно встроить в наши повседневные рабочие процессы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦der Lärmpegel steigen und die Privatsphäre am Arbeitsplatz verloren gehen würde⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦вырос бы уровень шума и пропало бы личное пространство на рабочем месте⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦der Zusammenhalt im Team gestärkt wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется сплочённость команды⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 211
 },
 {
  "n": 27,
  "titel": "Mitarbeit im Firmengarten",
  "typ": "T1",
  "g": "G4",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Mitarbeit im neuen Firmengarten⟧ gestritten⟦, die in unserer Freizeit stattfinden soll⟧.",
    "ru": "В команде спорят о ⟦планируемой работе в новом корпоративном саду, которая должна проходить в наше свободное время⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦die Mitarbeiter dadurch einen Teil ihrer Freizeit opfern müssten⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦сотрудникам пришлось бы пожертвовать частью свободного времени⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦wir nach Feierabend noch Beete anlegen und pflegen müssten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦нам пришлось бы после работы ещё сажать и пропалывать грядки⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦diese Maßnahme einen wichtigen Beitrag zum Umweltschutz leistet und das Image des Unternehmens verbessert⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦эта мера вносит важный вклад в защиту окружающей среды и улучшает имидж компании⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 221
 },
 {
  "n": 28,
  "titel": "Verstöße gegen die Sicherheitsvorschriften",
  "typ": "T3",
  "g": "G8",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante strenge Bestrafung von Verstößen gegen die Sicherheitsvorschriften⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом строгом наказании за нарушения правил техники безопасности⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch ein erheblicher Druck auf die Mitarbeiter entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦из-за этого на сотрудников ложится сильное давление⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦eine Atmosphäre der Angst entstehen würde, in der Fehler eher verschwiegen werden⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦возникла бы атмосфера страха, в которой об ошибках скорее промолчат⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Sicherheit am Arbeitsplatz erhöht wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦повышается безопасность на рабочем месте⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 212
 },
 {
  "n": 29,
  "titel": "Betriebliche Kinderbetreuung ★",
  "typ": "T2",
  "g": "G1",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Streichung des Urlaubsgeldes zur Finanzierung einer betriebseigenen Kita⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемой отмене отпускных ради финансирования собственного детсада фирмы⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦dadurch für die Mitarbeiter eine zusätzliche finanzielle Belastung entsteht⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦для сотрудников из-за этого возникает дополнительная финансовая нагрузка⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦alle Kollegen auf einen Teil ihres Einkommens verzichten müssten, obwohl nur wenige die Kita nutzen würden⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦всем коллегам пришлось бы отказаться от части дохода, хотя детсадом пользовались бы немногие⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦sich das Unternehmen als moderner und verantwortungsvoller Arbeitgeber positionieren kann⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦компания может позиционировать себя как современный и ответственный работодатель⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 222
 },
 {
  "n": 30,
  "titel": "Zigarettenpausen ★",
  "typ": "T3",
  "g": "G8",
  "saetze": [
   {
    "id": "1",
    "de": "Hallo zusammen!",
    "ru": "Всем привет!"
   },
   {
    "id": "2",
    "de": "Im Team wird über ⟦die geplante Beschränkung der Raucherpausen auf die regulären Pausenzeiten⟧ gestritten.",
    "ru": "В команде спорят о ⟦планируемом ограничении перекуров только официальными перерывами⟧."
   },
   {
    "id": "3",
    "de": "Dieses Thema ist derzeit für unser Team besonders relevant, da es unseren Arbeitsalltag direkt betrifft.",
    "ru": "Эта тема сейчас особенно актуальна для нашей команды, так как напрямую касается нашей повседневной работы."
   },
   {
    "id": "4",
    "de": "Ich unterstütze diese Maßnahme auf keinen Fall, da sie unser Arbeitsumfeld negativ beeinflusst.",
    "ru": "Я ни в коем случае не поддерживаю эту меру, так как она негативно влияет на нашу рабочую среду."
   },
   {
    "id": "5",
    "de": "Dafür gibt es mehrere Gründe. Erstens: Ein wesentlicher Nachteil ist, dass ⟦den Mitarbeitern dadurch ein Stück Flexibilität genommen wird⟧.",
    "ru": "Этому есть несколько причин. Во-первых, существенный недостаток в том, что ⟦у сотрудников из-за этого отнимают часть свободы⟧."
   },
   {
    "id": "6",
    "de": "Zudem könnte die Maßnahme als unfair empfunden werden und zu Unzufriedenheit führen.",
    "ru": "Кроме того, мера может восприниматься как несправедливая и привести к недовольству."
   },
   {
    "id": "7",
    "de": "Beispielsweise hat ein Unternehmen diese Maßnahme bereits getestet, jedoch keine guten Ergebnisse erzielt. Insofern spiegelt dies einen kritischen Trend wider, da immer mehr Unternehmen solche Maßnahmen wieder aufgeben.",
    "ru": "Например, одна компания уже опробовала эту меру, однако не добилась хороших результатов. В этом смысле это отражает критическую тенденцию, так как всё больше компаний снова отказываются от таких мер."
   },
   {
    "id": "8",
    "de": "Gerade in unserer Abteilung würde das bedeuten, dass ⟦rauchende Kollegen sich stundenlang keine kurze Auszeit mehr nehmen könnten⟧.",
    "ru": "Именно в нашем отделе это означало бы, что ⟦курящие коллеги часами не могли бы позволить себе короткую передышку⟧."
   },
   {
    "id": "9",
    "de": "Jedoch gibt es auch positive Aspekte: Ein möglicher Vorteil besteht vielleicht darin, dass ⟦die Gesundheit der Mitarbeiter gefördert wird⟧.",
    "ru": "Однако есть и положительные стороны: возможное преимущество, вероятно, заключается в том, что ⟦укрепляется здоровье сотрудников⟧."
   },
   {
    "id": "10",
    "de": "Angesichts dieser Bedenken wäre es sinnvoll, zunächst nach einer fairen Lösung zu suchen. Sofern die Geschäftsleitung bereit ist, unsere Vorschläge zu berücksichtigen, könnte die Maßnahme in veränderter Form durchaus akzeptiert werden.",
    "ru": "Ввиду этих сомнений было бы разумно сначала поискать справедливое решение. Если руководство готово учесть наши предложения, меру в изменённом виде вполне могли бы принять."
   },
   {
    "id": "11",
    "de": "Deshalb schlage ich vor, dass jeder seine Meinung sagt und Vor- und Nachteile benennt.",
    "ru": "Поэтому я предлагаю, чтобы каждый высказал своё мнение и назвал плюсы и минусы."
   },
   {
    "id": "12",
    "de": "Am Ende ist es wichtig, dass wir wie ein Mann geschlossen dahinterstehen. Lasst uns darüber diskutieren. Ich bin gespannt auf eure Meinungen!\n\nViele Grüße\n[Vorname]",
    "ru": "В конце концов важно, чтобы мы все как один стояли за решением. Давайте обсудим это. Мне интересно ваше мнение!\n\nС приветом\n[Имя]"
   }
  ],
  "woerter": 210
 }
];

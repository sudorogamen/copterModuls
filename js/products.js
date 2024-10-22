const products = [  
    {
        id: "1",
        category: "quadcopter",
        series: "Mavic",
        model: "DJI Mavic 3",
        prices: [
            "362 000",
            "400 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0001-front-view.jpg"
        ],
        maximumFlightTime: "46 мин",
        info: "DJI Mavic 3 — мощный флагманский дрон с камерой, оснащенный камерой Hasselblad с CMOS-матрицей 4/3 для упрощения создания изображения профессионального уровня. Устройство предлагает всенаправленное распознавание препятствий для оптимального опыта полета, максимальное время полета до 46 минут и максимальную дальность передачи сигнала 15 км. Каждое из обновлений DJI Mavic 3 устанавливает новые стандарты аэросъемки."
    },
    {
        id: "2",
        category: "quadcopter",
        series: "Air",
        model: "DJI AIR 2S",
        prices: [
            "129 000",
            "150 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0002-front-view.jpg",
        ],
        maximumFlightTime: "31 мин",
        info: "DJI Air 2S с 1-дюймовой CMOS-матрицей, мощным арсеналом функций, компактным корпусом и массой менее 600 г — идеальный дрон для аэрофотосъемки в любом месте и в любое время. Возьмите этот универсальный дрон с собой, чтобы запечатлеть мир в потрясающих деталях."
    },
    {
        id: "3",
        category: "quadcopter",
        series: "Mini",
        model: "DJI Mini 2",
        prices: [
            "49 000",
            "70 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0003-front-view.jpg"
        ],
        maximumFlightTime: "31 мин",
        info: "Крохотный, но мощный, DJI Mini 2 поможет вам создавать 4K-видео c 4-кратным зумом и потрясающие панорамные снимки."
    },
    {
        id: "4",
        category: "quadcopter",
        series: "Inspire",
        model: "DJI Inspire 2",
        prices: [
            "1 239 000",
            "1 400 000"
        ],
        photo: [
           "img/products/quadcopters/quadcopter0004-front-view.png"
        ],
        maximumFlightTime: "31 мин",
        info: "Мы оснастили Inspire 2 новой технологией обработки изображения - CineCore 2.1, записывающей видео с разрешением 6K при 4,44 Гбит/с в CinemaDNG*1 и 5.2К при 2,08 Гбит/с в Adobe, Apple ProRes*2 и H.265/H.264 при 100 Мбит/с. CineCore 2.1 поддерживает серийную съемку (10 одновременных JPEG + DNG снимков и непрерывную DNG съемку*3 при 20 кадрах/с (разрешением 24 Мп) - при использовании камеры Zenmuse X7."
    },{
        id: "5",
        category: "quadcopter",
        series: "Mavic",
        model: "DJI Mavic 3",
        prices: [
            "362 000",
            "400 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0001-folded-view.jpg"
        ],
        maximumFlightTime: "46 мин",
        info: "DJI Mavic 3 — мощный флагманский дрон с камерой, оснащенный камерой Hasselblad с CMOS-матрицей 4/3 для упрощения создания изображения профессионального уровня. Устройство предлагает всенаправленное распознавание препятствий для оптимального опыта полета, максимальное время полета до 46 минут и максимальную дальность передачи сигнала 15 км. Каждое из обновлений DJI Mavic 3 устанавливает новые стандарты аэросъемки."
    },
    {
        id: "6",
        category: "quadcopter",
        series: "Air",
        model: "DJI AIR 2S",
        prices: [
            "129 000",
            "150 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0002-folded-view.jpg",
        ],
        maximumFlightTime: "31 мин",
        info: "DJI Air 2S с 1-дюймовой CMOS-матрицей, мощным арсеналом функций, компактным корпусом и массой менее 600 г — идеальный дрон для аэрофотосъемки в любом месте и в любое время. Возьмите этот универсальный дрон с собой, чтобы запечатлеть мир в потрясающих деталях."
    },
    {
        id: "7",
        category: "quadcopter",
        series: "Mini",
        model: "DJI Mini 2",
        prices: [
            "49 000",
            "70 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0003-folded-view.jpg"
        ],
        maximumFlightTime: "31 мин",
        info: "Крохотный, но мощный, DJI Mini 2 поможет вам создавать 4K-видео c 4-кратным зумом и потрясающие панорамные снимки."
    },
    {
        id: "8",
        category: "quadcopter",
        series: "Inspire",
        model: "DJI Inspire 2",
        prices: [
            "1 239 000",
            "1 400 000"
        ],
        photo: [
           "img/products/quadcopters/quadcopter0004-folded-view.jpg"
        ],
        maximumFlightTime: "31 мин",
        info: "Мы оснастили Inspire 2 новой технологией обработки изображения - CineCore 2.1, записывающей видео с разрешением 6K при 4,44 Гбит/с в CinemaDNG*1 и 5.2К при 2,08 Гбит/с в Adobe, Apple ProRes*2 и H.265/H.264 при 100 Мбит/с. CineCore 2.1 поддерживает серийную съемку (10 одновременных JPEG + DNG снимков и непрерывную DNG съемку*3 при 20 кадрах/с (разрешением 24 Мп) - при использовании камеры Zenmuse X7."
    },{
        id: "9",
        category: "quadcopter",
        series: "Mavic",
        model: "DJI Mavic 3",
        prices: [
            "362 000",
            "400 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0001-above-view.jpg"
        ],
        maximumFlightTime: "46 мин",
        info: "DJI Mavic 3 — мощный флагманский дрон с камерой, оснащенный камерой Hasselblad с CMOS-матрицей 4/3 для упрощения создания изображения профессионального уровня. Устройство предлагает всенаправленное распознавание препятствий для оптимального опыта полета, максимальное время полета до 46 минут и максимальную дальность передачи сигнала 15 км. Каждое из обновлений DJI Mavic 3 устанавливает новые стандарты аэросъемки."
    },
    {
        id: "10",
        category: "quadcopter",
        series: "Air",
        model: "DJI AIR 2S",
        prices: [
            "129 000",
            "150 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0002-above-view.jpg",
        ],
        maximumFlightTime: "31 мин",
        info: "DJI Air 2S с 1-дюймовой CMOS-матрицей, мощным арсеналом функций, компактным корпусом и массой менее 600 г — идеальный дрон для аэрофотосъемки в любом месте и в любое время. Возьмите этот универсальный дрон с собой, чтобы запечатлеть мир в потрясающих деталях."
    },
    {
        id: "11",
        category: "quadcopter",
        series: "Mini",
        model: "DJI Mini 2",
        prices: [
            "49 000",
            "70 000"
        ],
        photo: [
            "/img/products/quadcopters/quadcopter0003-above-view.jpg"
        ],
        maximumFlightTime: "31 мин",
        info: "Крохотный, но мощный, DJI Mini 2 поможет вам создавать 4K-видео c 4-кратным зумом и потрясающие панорамные снимки."
    },
    {
        id: "12",
        category: "quadcopter",
        series: "Inspire",
        model: "DJI Inspire 2",
        prices: [
            "1 239 000",
            "1 400 000"
        ],
        photo: [
           "img/products/quadcopters/quadcopter0004-above-view.jpg"
        ],
        maximumFlightTime: "31 мин",
        info: "Мы оснастили Inspire 2 новой технологией обработки изображения - CineCore 2.1, записывающей видео с разрешением 6K при 4,44 Гбит/с в CinemaDNG*1 и 5.2К при 2,08 Гбит/с в Adobe, Apple ProRes*2 и H.265/H.264 при 100 Мбит/с. CineCore 2.1 поддерживает серийную съемку (10 одновременных JPEG + DNG снимков и непрерывную DNG съемку*3 при 20 кадрах/с (разрешением 24 Мп) - при использовании камеры Zenmuse X7."
    },
];
export default products;
document.addEventListener('DOMContentLoaded', function() {
    const showTableBtn = document.getElementById('showTableBtn');
    const hideTableBtn = document.getElementById('hideTableBtn');
    const table = document.getElementById('Tabela_opinii');

    const initialData = [
    {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        opinie: 'Fantastyczne kino, niesamowity dźwięk i obraz!',
        ocenaFilmu: 5,
        ocenaUslugi: 4,
        Data_opinii: '2023-04-01'
    },
    {
        imie: 'Ewa',
        nazwisko: 'Nowak',
        opinie: 'Bardzo wygodne fotele i miła obsługa. Polecam!',
        ocenaFilmu: 4,
        ocenaUslugi: 5,
        Data_opinii: '2023-04-03'
    },
    {
        imie: 'Piotr',
        nazwisko: 'Zieliński',
        opinie: 'Duży wybór filmów, jestem bardzo zadowolony.',
        ocenaFilmu: 4,
        ocenaUslugi: 4,
        Data_opinii: '2023-04-05'
    },
    {
        imie: 'Anna',
        nazwisko: 'Wiśniewska',
        opinie: 'Czysto i przyjemnie, ale ceny przekąsek są za wysokie.',
        ocenaFilmu: 3,
        ocenaUslugi: 3,
        Data_opinii: '2023-04-10'
    },
    {
        imie: 'Marek',
        nazwisko: 'Lewandowski',
        opinie: 'Świetna lokalizacja, ale brakuje promocji dla stałych klientów.',
        ocenaFilmu: 4,
        ocenaUslugi: 2,
        Data_opinii: '2023-04-12'
    },
    {
        imie: 'Katarzyna',
        nazwisko: 'Borowicz',
        opinie: 'Najlepsze kino w mieście!',
        ocenaFilmu: 5,
        ocenaUslugi: 5,
        Data_opinii: '2023-04-15'
    },
    {
        imie: 'Łukasz',
        nazwisko: 'Mazur',
        opinie: 'Dobre ceny biletów, ale mało miejsc parkingowych.',
        ocenaFilmu: 4,
        ocenaUslugi: 3,
        Data_opinii: '2023-04-18'
    },
    {
        imie: 'Agnieszka',
        nazwisko: 'Kubiak',
        opinie: 'Przyjazne miejsce dla rodzin z dziećmi.',
        ocenaFilmu: 4,
        ocenaUslugi: 5,
        Data_opinii: '2023-04-20'
    },
    {
        imie: 'Tomasz',
        nazwisko: 'Nowicki',
        opinie: 'Komfortowe sale, ale przeciętna jakość przekąsek.',
        ocenaFilmu: 3,
        ocenaUslugi: 4,
        Data_opinii: '2023-04-22'
    },
    {
        imie: 'Magdalena',
        nazwisko: 'Szymańska',
        opinie: 'Personel zawsze pomocny i uśmiechnięty.',
        ocenaFilmu: 5,
        ocenaUslugi: 5,
        Data_opinii: '2023-04-25'
    },
    {
        imie: 'Karolina',
        nazwisko: 'Wojcik',
        opinie: 'Świetny repertuar, ale popcorn był trochę za słony.',
        ocenaFilmu: 4,
        ocenaUslugi: 3,
        Data_opinii: '2023-04-26'
    },
    {
        imie: 'Michał',
        nazwisko: 'Dąbrowski',
        opinie: 'Idealne miejsce na wieczór z przyjaciółmi.',
        ocenaFilmu: 5,
        ocenaUslugi: 5,
        Data_opinii: '2023-04-27'
    },
    {
        imie: 'Aleksandra',
        nazwisko: 'Ostrowska',
        opinie: 'Nieco za głośno w sali kinowej, ale ogólnie w porządku.',
        ocenaFilmu: 3,
        ocenaUslugi: 3,
        Data_opinii: '2023-04-28'
    },
    {
        imie: 'Krzysztof',
        nazwisko: 'Kamiński',
        opinie: 'Kino jest OK, ale brakuje nowości filmowych.',
        ocenaFilmu: 3,
        ocenaUslugi: 4,
        Data_opinii: '2023-04-29'
    },
    {
        imie: 'Monika',
        nazwisko: 'Zając',
        opinie: 'Fantastyczna jakość obrazu, ale mało kas biletowych.',
        ocenaFilmu: 5,
        ocenaUslugi: 3,
        Data_opinii: '2023-04-30'
    },
    {
        imie: 'Marcin',
        nazwisko: 'Kowalczyk',
        opinie: 'Kino godne polecenia, chociaż parking jest zawsze pełny.',
        ocenaFilmu: 4,
        ocenaUslugi: 4,
        Data_opinii: '2023-05-01'
    },
    {
        imie: 'Zuzanna',
        nazwisko: 'Lis',
        opinie: 'Miła atmosfera i czyste sale, ale brak opcji zakupu biletów online.',
        ocenaFilmu: 4,
        ocenaUslugi: 2,
        Data_opinii: '2023-05-02'
    },
    {
        imie: 'Jakub',
        nazwisko: 'Wojciechowski',
        opinie: 'Kino na poziomie, ale ceny mogłyby być niższe.',
        ocenaFilmu: 4,
        ocenaUslugi: 3,
        Data_opinii: '2023-05-03'
    },
    {
        imie: 'Julia',
        nazwisko: 'Kowalska',
        opinie: 'Przytulne sale, ale czasami zdarzają się opóźnienia seansów.',
        ocenaFilmu: 3,
        ocenaUslugi: 4,
        Data_opinii: '2023-05-04'
    },
    {
        imie: 'Mateusz',
        nazwisko: 'Zawadzki',
        opinie: 'Dobra jakość dźwięku, ale słaba wentylacja w salach.',
        ocenaFilmu: 4,
        ocenaUslugi: 3,
        Data_opinii: '2023-05-05'
    }
];

    function insertDataIntoTable(data) {
        const tableBody = table.getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; 
    
        data.forEach(rowData => {
            const newRow = document.createElement('tr');
            Object.values(rowData).forEach(text => {
                const cell = document.createElement('td');
                cell.textContent = text;
                newRow.appendChild(cell);
            });
            tableBody.appendChild(newRow);
        });
    
        const summaryRow = document.createElement('tr');
        const summaryCell = document.createElement('td');
        summaryCell.textContent = 'Łącznie opinii:';
        summaryCell.setAttribute('colspan', '5'); 
        summaryRow.appendChild(summaryCell);
    
        const totalReviewsCell = document.createElement('td');
        totalReviewsCell.textContent = data.length; 
        summaryRow.appendChild(totalReviewsCell);
    
        tableBody.appendChild(summaryRow);
    }

    showTableBtn.addEventListener('click', function() {
        insertDataIntoTable(initialData);
        table.style.display = 'block'; 
        showTableBtn.style.display = 'none';
        hideTableBtn.style.display = 'inline-block';
      });
    
      hideTableBtn.addEventListener('click', function() {
        table.style.display = 'none'; 
        showTableBtn.style.display = 'inline-block';
        hideTableBtn.style.display = 'none';
    });
});

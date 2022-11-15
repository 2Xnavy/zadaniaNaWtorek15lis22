# zadaniaNaWtorek15lis22
Zadania na wtorek (15 lis 2022)




Znowu jest to zadanie do wykorzystania paradygmatu programowania
imperatywnego. Jedyne funkcję które powinniście używać, to
for(), push(), typeof(), split(), charCodeAt(0).

Każdy z was będzie prezentował rozwiązanie na zajęciach stacjonarnych we wtorek, ale prosimy was o trzymanie zadań w osobnych
folderach na własnym repozytorium na Githubie. Czyli do ściągniętego repo od Sambora (https://github.com/DustEyezz/Praktyki),
dodajemy nowy folder /zadanie4/ a w nim plik zadanie4.js (oraz dodatkowe.js dla chętnych)


Zadanie 1. (2 pkt)
Wypełnij funkcję calculate() obsługującą dodawanie, odejmowanie,
dzielenie oraz mnożenie. Obsłuż dzielenie przez 0 w dowolny sposób.
Należy edytować form w index.html tak aby użytkownik miał wybór.
Można edytować ilość zmiennych, które ta funkcja przyjmuje.

Zadanie 2. (2 pkt)
Wypełnij funkcję palindrome(), która przyjmuje zmienną i sprawdza
czy jest ona palindromem. Funkcja ma zwracać true (czyli jest palindromem)
lub false (nie jest palindromem). Przykłady palindromu: „Kayak”,  „Ala”.
Przykłady czegoś co nie jest palindromem: „Kotek”, „Pies”.

Zadanie 3. (3 pkt)
Napisz funkcję, która przyjmuje tablicę, a w przypadku tablicy liczb zwraca
drugi największy element w tej tablicy. W przypadku tablicy stringów (czyli
tekstu) zwraca drugi najdłuższy z nich.
[1, 5 ,10 ,15]  >> 10
[1,1, 3, 3, 4 ,4] >> 3 
[ala, robert, stanislaw] >> Robert

Zadanie 4. (2 pkt)
Napisz rekurencyjną funkcję w JavaScript, która będzie wypisywać liczby z
przedziału a,b podanych jako argument funkcji.
Przykłady: 
Funkcja(8, 11) >> 8 9 10 11
Funkcja(1, 5) >> 1 2 3 4 5




Zadanie na dodatkowe punkty (3 pkt)
Dodaj do kalkulatora obsługę 3 dodatkowych operacji (logarytmów o podstawie 2,
potęg (rekurencyjnie) oraz jedna dowolna).




Zadanie dodatkowe (2 pkt)
Jednym z najbardziej rozpowszechnionych zastosowań rekurencji jest przeszukiwanie binarne.
Jego pseudokod wygląda następująco:

BINARY_SEARCH(list, start, stop, search)
  Jeśli start > stop to zakończ działanie. Nie ma tego elementu w ciągu.
  W przeciwnym przypadku:
      q = (start + stop) / 2
      Jeśli na pozycji q listy list znajduje się ten element to zwróć że występuje on w tym ciągu
      Jeśli na pozycji q listy list znajduje się element większy od poszukiwanego to wywołaj BINARY_SEARCH(list,start,q-1,search)
      Jeśli na pozycji q listy list znajduje się element mniejszy od poszukiwanego to wywołaj BINARY_SEARCH(list,q+1,stop,search)
Napisz funkcje w JavaScript, która będzie realizowała powyższy algorytm.

Następnie przetestuj tę funkcję w programie, który pobiera ciąg, a następnie liczbę i wypisuje (jeżeli istnieje)
pozycję elementu w ciągu. W przeciwnym przypadku program powinien wypisać: Brak elementu w ciągu!

Sample input 1:
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
1
Sample output 1:
0

Sample input 2:
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
31
Sample output2:
Brak elementu w ciągu!




# CRAFTCORNER: SISTEM INFORMATIC PENTRU ADMINISTRAREA UNUI MAGAZIN ONLINE CU VÂNZĂTORI MULTIPLI

## Scopul Proiectului

Scopul principal al proiectului CRAFTCORNER este de a dezvolta un sistem informatic complet pentru administrarea eficientă a unui magazin online cu vânzători multipli, folosind tehnologii de actualitate.


### Obiective Punctuale

- **Crearea unei interfețe grafice cu design atrăgător și interacțiuni intuitive:**
  Platforma va oferi o interfață modernă și funcțională, cu un design estetic și elemente grafice coerente.

- **Dezvoltarea unei interfețe responsive pentru accesibilitate maximă:**
  Interfața va fi responsive, adaptându-se la diferite dimensiuni de ecrane, pentru a oferi o experiență optimă utilizatorilor.

- **Platformă specializată în vânzarea produselor handmade:**
  CRAFTCORNER va servi ca un mediu dedicat exclusiv vânzării de produse handmade, susținând artiștii și promovând produsele lor într-un cadru profesional.

- **Implementarea unui panou de administrare intuitiv și eficient pentru vânzători:**
  Vânzătorii vor avea acces la un panou de control simplu și funcțional, unde își pot gestiona produsele.

## Repository-ul Proiectului:

Adresa repository-ului este:  https://github.com/oana73/licenta11


## Pașii de instalare

### 1. Cerințe Preliminare

- Node.js >= 18.17 

### 2. Clonarea repository-ului

Pentru a obține o copie locală a proiectului, acesta trebuie clonat, utilizând comanda:

```bash
git clone https://github.com/oana73/licenta11.git
```

### 3. Instalare Dependințe

Proiectul utilizează un număr mare de pachete de care depinde funcționarea corespunzătoare a aplicației. Așadar, în directorul proiectului clonat, se va folosi următoarea comandă pentru a instala toate dependințele necesare:

```bash
npm install
```
Aceste pachete, cât și versiunile lor, pot fi vizualizate în fișierul `package.json`.

### 4. Configurare Variabile de Mediu

Următorul pas este setarea variabilelor de mediu. Pentru acest pas se creează local un fișier `.env` care conține variabile precum:
- NEXT_PUBLIC_BASE_URL - care definește URL-ul de bază al aplicației, folosit pentru a construi adresele URL în aplicație.
- DATABASE_URL - care definește conexiunea la baza de date utilizată în aplicație.

### 5. Rularea Aplicației

Aplicația poate fi rulată utilizând comanda:
```bash
npm run dev
```
Vizualizarea aplicației se face prin intermediul browser-ului folosind URL-ul  [http://localhost:3000](http://localhost:3000).


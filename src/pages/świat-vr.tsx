import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from 'components/Layout';

const VRPage: NextPage = () => (
  <Layout>
    <h1>Przygoda w Saint Tropez</h1>
    <p>
      Witajcie podróżnicy! Czy kiedykolwiek marzyliście o tym, żeby zanurzyć się
      w pięknej scenerii Francji, poczuć wiatr we włosach i wyruszyć w szaloną
      przygodę samochodową? Teraz to wszystko jest możliwe dzięki wirtualnemu
      doświadczeniu VR &quot;Przygoda w Saint Tropez&quot; dostępnemu w ARS OLD
      CAR - Muzeum Motoryzacji!
    </p>
    <p>
      Przygotujcie się na niezapomnianą podróż w towarzystwie siostry Klotyldy i
      Żandarma, którzy poprowadzą Was przez urocze uliczki Saint Tropez.
      Odwiedzicie najważniejsze zabytki miasta, podziwiając malownicze
      krajobrazy Francji w całej ich okazałości. A to jeszcze nie wszystko! W
      grze z Panią Burmistrz, będziecie mieli okazję przetestować swoje
      umiejętności w bule.
    </p>
    <p>
      Nie przegapcie szansy, aby wziąć udział w tej niezwykłej przygodzie, która
      z pewnością dostarczy Wam mnóstwo wrażeń i emocji! Przygoda jest dostępna
      tylko w ARS OLD CAR i jest podzielona na dwie historie: Część 1:
      &quot;Siostro zwolnij!&quot; oraz Część 2: &quot;Wycieczka po Saint
      Tropez&quot;, co sprawia, że jest to wspaniała okazja na spędzenie czasu z
      rodziną i przyjaciółmi. Czekamy na Was w ARS OLD CAR.
    </p>
    <Link href='/cennik'>Sprawdź bilet</Link>
  </Layout>
);

export default VRPage;

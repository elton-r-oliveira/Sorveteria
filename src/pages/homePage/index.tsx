import { useState } from "react";
import Navbar from "@/pages/navbar";
import Image from "next/image";
import styles from "@/pages/homePage/HomePage.module.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function HomePage() {

  const produtos = [
    { id: 1, nome: "Sorvete de Chocolate", preco: 12.99, imagem: "/sorvete1.jpg" },
    { id: 2, nome: "Sorvete de Morango", preco: 10.99, imagem: "/sorvete2.jpg" },
    { id: 3, nome: "Sorvete de Pistache", preco: 14.99, imagem: "/sorvete3.jpg" },
    { id: 4, nome: "Sorvete de Baunilha", preco: 11.99, imagem: "/sorvete4.jpg" },
  ];

  const [quantidades, setQuantidades] = useState(Array(produtos.length).fill(1));

  const alterarQuantidade = (index: number, delta: number) => {
    setQuantidades((prev) => {
      const novaQtd = [...prev];
      novaQtd[index] = Math.max(1, novaQtd[index] + delta);
      return novaQtd;
    });
  };

  return (
    <>
      <Navbar />

      {/* Seção Home */}
      <section id="home" className={styles.section}>
        <h1 className={styles.title}>Bem-vindo à Gelato & Magia!</h1>

        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            <Image src="/sorvete1.jpg" alt="Sorvete 1" width={200} height={200} className={styles.image} />
            <Image src="/sorvete2.jpg" alt="Sorvete 2" width={200} height={200} className={styles.image} />
            <Image src="/sorvete3.jpg" alt="Sorvete 3" width={200} height={200} className={styles.image} />
            <Image src="/sorvete4.jpg" alt="Sorvete 4" width={200} height={200} className={styles.image} />
            <Image src="/sorvete5.jpg" alt="Sorvete 5" width={200} height={200} className={styles.image} />
          </div>
        </div>

        {/* Imagem maior abaixo do carrossel */}
        <div className={styles.largeImageContainer}>
          <Image src="/sorveteGrande.jpg" alt="Sorvete Grande" width={1200} height={600} className={styles.largeImage} />
        </div>
      </section>

      {/* Seção Produtos */}
      <section id="produtos" className={styles.produtosSection}>
        <h2 className={styles.tituloProdutos}>Nossos Produtos</h2>
        <div className={styles.produtosGrid}>
          {produtos.map((produto, index) => (
            <div key={produto.id} className={styles.produtoCard}>
              <Image src={produto.imagem} alt={produto.nome} width={150} height={150} className={styles.produtoImagem} />
              <h3>{produto.nome}</h3>
              <p className={styles.preco}>R$ {produto.preco.toFixed(2)}</p>
              <div className={styles.quantidadeContainer}>
                <button onClick={() => alterarQuantidade(index, -1)}>-</button>
                <span>{quantidades[index]}</span>
                <button onClick={() => alterarQuantidade(index, 1)}>+</button>
              </div>
              <button className={styles.botaoCarrinho}>Adicionar ao Carrinho</button>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de Localização */}
      <section id="localizacao" className={styles.localizacaoSection}>
        <h2 className={styles.tituloLocalizacao}>Onde Estamos</h2>
        <p>Venha nos visitar e experimentar a magia dos nossos gelatos!</p>

        <div className={styles.mapaContainer}>
          <Image
            src="/mapa-fake.png"
            alt="Mapa da localização"
            width={800}
            height={400}
            className={styles.mapaImage}
          />
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className={styles.sobre}>
        <h2 className={styles.titulo}>Sobre Nós</h2>
        <p className={styles.descricao}>
          Descubra a história encantada por trás da Gelato & Magia.
          <br />
          <br />
          A Gelato & Magia foi fundada por Débora Araújo, uma jovem apaixonada por receitas antigas e magia. Ela descobriu a lendária receita de Alfredo Gelato, um alquimista que, séculos antes, criara gelatos mágicos com o poder de transformar emoções. Alfredo acreditava que a comida poderia curar e encantar, e seus gelatos eram conhecidos por trazer felicidade, coragem e até amor. No entanto, com sua morte, a receita se perdeu, e ninguém conseguiu recriar os famosos sorvetes.
          Após anos de pesquisa, Débora encontrou o segredo: o ingrediente mágico chamado Frostflower, uma flor rara que florescia apenas em noites de lua cheia. Com esse ingrediente, Débora abriu a Gelato & Magia, uma gelateria onde cada sorvete oferecia uma experiência única. O Gelato da Esperança renovava o espírito, e o Gelato do Encanto fazia os problemas desaparecerem.
          A loja se tornou um sucesso, atraindo visitantes de todo o mundo, que buscavam mais do que um sorvete—queriam viver uma experiência mágica. Débora trouxe a magia de Alfredo de volta, renovando-a com um toque moderno e doce.

        </p>
      </section>

      {/* Rodapé */}
      <footer id="contato" className={styles.footer}>
        <div className={styles.contatoInfo}>
          <p className={styles.endereco}>Endereço: Rua Logo Ali, 498 - Vila dos Pilagers, Nether</p>
          <p className={styles.telefone}>Telefone: (21) 4002-8922</p>
          <p className={styles.email}>Email: contato@gelatoemagia.com</p>
        </div>

        <div className={styles.redesSociais}>
          <a href="https://www.instagram.com/gelatoemagia" className={styles.icon}>
            <InstagramIcon fontSize="large" />
          </a>
          <a href="https://www.facebook.com/gelatoemagia" className={styles.icon}>
            <FacebookIcon fontSize="large" />
          </a>
          <a href="https://www.twitter.com/gelatoemagia" className={styles.icon}>
            <XIcon fontSize="large" />
          </a>
        </div>

        <p className={styles.copyright}>© 2025 Gelato & Magia - Todos os direitos reservados</p>
      </footer>

    </>
  );
}

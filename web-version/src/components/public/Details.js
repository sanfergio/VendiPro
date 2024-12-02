import React from "react";
import "/src/styles.css";

const Details = () => {
  return (
    <div>
      <section id="stock-management" className="details-section">
        <h2>Gestão de Estoque</h2>
        <img
          className="deatils-images"
          src="https://img.freepik.com/free-photo/smiling-african-american-cashier-sitting-checkout_74855-3297.jpg?t=st=1727129613~exp=1727133213~hmac=992184a012c3840960ab41e071e089521496291c110aadaa602a75f95d28a27a&w=900"
          alt="Gestão de Estoque"
        />
        <p>
          Acompanhe suas mercadorias de forma automática e em tempo real. O
          sistema de gestão de estoque do VendiPro oferece alertas de baixa,
          controle por lotes e rastreamento de produtos, garantindo que você
          nunca perca uma venda por falta de estoque.
        </p>
      </section>

      <section id="invoice-generation" className="details-section">
        <h2>Faturamento Online</h2>
        <img
          src="https://img.freepik.com/free-photo/representation-user-experience-interface-design-smartphone_23-2150165972.jpg?t=st=1727130502~exp=1727134102~hmac=0571ea855125795f0514e375b633d22d177c68c32264397d02e333245dea3e5c&w=900"
          alt="Faturamento Online"
        />
        <p>
          Feche vendas e gere notas fiscais eletrônicas (NF-e) e físicas com
          apenas alguns cliques, cumprindo todas as exigências legais. Nossa
          plataforma garante que você emita documentos fiscais de maneira rápida
          e segura, economizando tempo e evitando erros.
        </p>
      </section>

      <section id="automatic-alerts" className="details-section">
        <h2>Alertas Automáticos</h2>
        <img
          src="https://img.freepik.com/free-photo/communication-connection-message-networking_53876-120339.jpg?t=st=1727130645~exp=1727134245~hmac=0aa38f1c9b313574a6172d5dd93aa297a403825be369f407b2d702f158a74c28&w=900"
          alt="Alertas Automáticos"
        />
        <p>
          Receba notificações quando um produto do estoque estiver abaixo da
          quantidade pré-estabelecida, garantindo que você nunca fique sem itens
          essenciais. Mantenha seu controle de inventário sempre atualizado e
          minimize perdas com nossos alertas eficazes.
        </p>
      </section>
    </div>
  );
};

export default Details;

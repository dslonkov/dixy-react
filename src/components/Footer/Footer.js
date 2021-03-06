import React from "react";
import classes from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.coupon_terms}>
        Выдача и использование купонов:
        <span className={classes.date}> 17.02 – 08.03.2020</span>
      </div>

      <div className={classes.action_terms}>
        <div>Условия проведения акции:</div>
        Совершите покупку на сумму от 700 руб.* в период с 17.02.2020 г. по
        08.03.2020 г. и получите на кассе купон с наклейками-скидками** на
        последующие покупки в магазинах «ДИКСИ». Выбирайте товар*** и
        наклеивайте скидку**. *700 руб. без учета табачной продукции (табак,
        табачные изделия и курительные принадлежности, в том числе трубки,
        кальяны, сигаретная бумага, зажигалки) и алкогольной продукции с
        установленной минимальной розничной ценой. Сумма покупки рассчитывается
        после применения всех скидок. ** Скидка предоставляется на последующую
        покупку товаров***, кроме табачной продукции (табак, табачные изделия и
        курительные принадлежности, в том числе трубки, кальяны, сигаретная
        бумага, зажигалки) и алкогольной продукции с установленной минимальной
        розничной ценой. Скидка предоставляется в размере, указанном на
        наклейке, и распространяется только на тот товар***, на который она
        наклеена, и рассчитывается от цены, действующей в магазине на момент
        приобретения товара***. Скидка не суммируется и не распространяется на
        действующие скидки/акции. *** В акции не участвуют следующие товары:
        товары со скидками, акционные товары, табачная продукция (табак,
        табачные изделия и курительные принадлежности, в том числе трубки,
        кальяны, сигаретная бумага, зажигалки) и алкогольная продукция с
        установленной минимальной розничной ценой. Скидка, наклеенная на такой
        товар, не применяется и сгорает, восстановлению не подлежит. В случае
        утери купона наклейки-скидки не восстанавливаются. Количество купонов
        ограничено. Информацию об организаторе акции, правилах ее проведения,
        количестве купонов с наклейками-скидками, о виде/типе скидок, сроках,
        месте и порядке их получения, об установленных ограничениях можно узнать
        по телефону: 8 (800) 333-02-01, а также в торговых залах магазинов
        «ДИКСИ» и на сайте www.dixy.ru в период проведения акции.
      </div>
    </div>
  );
}
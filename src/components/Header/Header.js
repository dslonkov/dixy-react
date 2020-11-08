import React from 'react'
import classes from './Header.module.scss'
import {ReactComponent as LogoDixy} from '../../images/header/logo-dixy.svg'
import { ReactComponent as Card } from "../../images/header/card.svg"
import { ReactComponent as PricesList } from "../../images/header/prices-list.svg";
import { ReactComponent as Products } from "../../images/header/products.svg";
import { ReactComponent as Bottle1 } from "../../images/header/bottle1.svg";
import { ReactComponent as Bottle2 } from "../../images/header/bottle2.svg";


export default function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Header__item1}>
        <LogoDixy alt='dixy' />

        <p className={classes.item1_text}>
          залепись <span className={classes.price}>цена</span>
        </p>

        <span className={classes.subtext}>с 17 февраля по 8 марта 2020 г.</span>
      </div>

      <div className={classes.Header__item2}>
        <Card alt='card' />

        <p className={classes.item2_text}>
          Получите на кассе купон со скидками
        </p>

        <span className={classes.subtext}>При покупке от 700 руб.</span>
      </div>

      <div className={classes.Header__item3}>
        <PricesList alt='priceslist' />

        <p className={classes.item3_text}></p>
      </div>

      <div className={classes.Header__item4}>
        <Products alt='products' />

        <p className={classes.item4_text}>Выберите товар и наклейте скидку</p>
      </div>

      <div className={classes.Header__item5}>
        <p className={classes.bottle1_text}>
          Наклейка перекрывает штрих-код на упаковке
        </p>
        <div className={classes.bottle1}>
          <Bottle1 alt='bottle' />
        </div>
        <div className={classes.bottle2}>
          <Bottle2 alt='bottle' />
        </div>
        <p className={classes.bottle2_text}>
          Наклейка перекрывает штрих-код на упаковке
        </p>
      </div>
    </div>
  );
}
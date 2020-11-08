import React from 'react'
import classes from './TestResult.module.scss'
import {
  VKShareButton,
  VKIcon,
  FacebookShareButton,
  OKShareButton,
  FacebookIcon,
  OKIcon,
} from "react-share";

export default function TestResult() {
  return (
    <div className={classes.testResult}>
      <h2>СКИДУЛЬКИН</h2>

      <p>
        При виде слова «скидка» твои ладони начинают потеть, а перед глазами
        появляется легкая дымка. Ты носишься по рядам магазина, сбрасывая в
        корзинку всё, что попадается под руку. Ты часто набираешь больше, чем
        можешь съесть, стараясь оправдать себя тем, что это можно отдать соседу,
        а это точно пригодится. В этом нет ничего ужасного, ты любишь
        продуктовый шопинг, но попробуй хоть иногда воспользоваться списком.
      </p>

      <VKShareButton
        children={<VKIcon size={32} round={true} />}
        url='http://localhost:3000/'
      />

      <FacebookShareButton
        children={<FacebookIcon size={32} round={true} />}
        url='http://localhost:3000/'
      />

      <OKShareButton
        children={<OKIcon size={32} round={true} />}
        url='http://localhost:3000/'
      />
    </div>
  );
}
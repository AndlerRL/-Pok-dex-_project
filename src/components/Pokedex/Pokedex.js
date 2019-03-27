import React from 'react';

import PokedexData from './PokedexData/PokedexData';
import css from './Pokedex.css'

const pokedex = props => (
  <div className={css.Pokedex}>
    <div className={css.Left}>
      <div className={css.Logo}></div>
      <div className={css.bgCurve1_left}></div>
      <div className={css.bgCurve2_left}></div>
      <div className={css.curve1_left}>
        <div className={css.btnGlass}>
          <div className={css.reflect}></div>
        </div>
        <div className={css.miniBtnGlass1}></div>
        <div className={css.miniBtnGlass2}></div>
        <div className={css.miniBtnGlass3}></div>
      </div>
      <div className={css.curve2_left}>
        <div className={css.Junction}>
          <div className={css.Junction1}></div>
          <div className={css.Junction2}></div>
        </div>
      </div>
      <div className={css.Screen}>
        <div className={css.TopImg}>
          <div className={css.btnTopImg1}></div>
          <div className={css.btnTopImg2}></div>
        </div>
        <div className={css.Img}>
          <img src={props.frontImg} alt="Pokemon_Front_Default" height={props.heightImg} />
        </div>
        <div className={css.btnBottomImg}></div>
        <div className={css.Speakers}>
          <div className={css.sp}></div>
          <div className={css.sp}></div>
          <div className={css.sp}></div>
          <div className={css.sp}></div>
        </div>
      </div>
      <div className={css.bigBlueBtn}></div>
      <div className={css.barBtn1}></div>
      <div className={css.barBtn2}></div>
      <div className={css.Cross}>
        <div className={css.leftCross}>
          <div className={css.leftT}></div>
        </div>
        <div className={css.topCross}>
          <div className={css.upT}></div>
        </div>
        <div className={css.rightCross}>
          <div className={css.rightT}></div>
        </div>
        <div className={css.midCross}>
          <div className={css.midCircle}></div>
        </div>
        <div className={css.bottomCross}>
          <div className={css.downT}></div>
        </div>
      </div>
    </div>
    <div className={css.Right}>
      <PokedexData 
        name={props.name}
        type={props.type}
        eggGrp={props.eggGrp}
        height={props.height}
        weight={props.weight}
        habitat={props.habitat}
        descriptionTitle={props.descriptionTitle}
        descriptionBody={props.descriptionBody} />
      <div className={css.blueBtns1}>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
      </div>
      <div className={css.blueBtns2}>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
        <div className={css.blueBtn}></div>
      </div>
      <div className={css.miniBtnGlass4}></div>
      <div className={css.miniBtnGlass5}></div>
      <div className={css.barBtn3}></div>
      <div className={css.barBtn4}></div>
      <div className={css.yellowBox1}>
        <p><span>Generation :</span> {props.generation}</p>
        <p><span>Version Group :</span> {props.versionGrp}</p>
        <p><span>Evolves from :</span> {props.evolvesFrom}</p>
        <p><span>Base Experience :</span> {props.baseExp}xp</p>
      </div>
      <div className={css.bgCurve1_right}></div>
      <div className={css.bgCurve2_right}></div>
      <div className={css.curve1_right}></div>
      <div className={css.curve2_right}></div>
    </div>
  </div>
);

export default React.memo(pokedex);
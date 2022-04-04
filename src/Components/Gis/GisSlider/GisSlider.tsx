import { CustomSlider } from "Components/Common/CustomSlider";
import React from "react";

export const GisSlider = () => {
  return (
    <CustomSlider
      sliderData={[
        {
          title:
            "На месторождениях республики Узбекистан  имеется возможность выполнить ГИС",
          imageUrl: "gisSlide1.png",
          text: `• На геофизическом кабеле,
            
          • На буровом инструменте автономными геофизическими приборами.`,
        },
        {
          title: "Обработка и интерпретация  данных ГИС",
          imageUrl: "gisSlide2.png",
          text: `Для интерпретации и контроля всех видов и задач открытого и обсаженного ствола, применяется комплексная технология автоматической обработки данных ГИС. Данная технология позволяет одновременно проводить редактирование, обработку и подготовку результирующих данных для заключений и объединяет пакет программ сбора и обработки геофизических данных:

          • Prime (НПЦ «ГеоТЭК», Россия);

          • Соната (ООО «ФХС-ПНГ», Россия);

          • GENESIS (АО НПФ “Геофизика”, Россия);

          • МФС «ВИКИЗ» (ООО НПП ГА «Луч» , Россия).

          Все этапы обработки и интерпретации проводятся специалистами имеющие соответствующую квалификацию и опыт работ.`,
        },
      ]}
    />
  );
};

import { Figure } from "Components/Common/Figure";
import React from "react";

export const PvrDescription = () => {
  return (
    <>
      <Figure
        picture="pvrDescription.png"
        title={`Прострелочно-\nвзрывные работы`}
        text={`С Мая 2021 г. ООО «QUANTO SERVICING» запустила новое направление - прострелочно-взрывные работы. \nПВР в нефтяных, газовых и других скважинах применяются на стадиях разведки, вскрытия и эксплуатации продуктивных пластов с использованием широкой номенклатуры кумулятивных перфораторов, воздействием пороховых газов и горюче-окислительных систем.`}
        backgroundColor="#FFF"
        info={true}
      />
    </>
  );
};

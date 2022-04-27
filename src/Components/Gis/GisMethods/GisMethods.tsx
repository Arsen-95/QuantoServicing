import { Box, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import Method from "./Method";

export const GisMethods = () => {
  const { t } = useTranslation();

  return (
    <Box py="100px" bg="#393A47">
      <Container>
        <Box
          as="h5"
          maxW="374px"
          fontWeight="600"
          fontSize="50px"
          lineHeight="99.5%"
          letterSpacing="-0.04em"
          mb="70px"
        >
          {t("headers:gisMethods")}
        </Box>
        <Flex justifyContent="space-between">
          <Method
            methodName={t("descriptions:methodEl")}
            text={
              <>
                <b>КС</b> - метод кажущегося сопротивления; <br />
                <b>ПС</b> - метод самопроизвольной поляризации; <br />
                <b>ИК</b> - метод индукционного каротажа; <br />
                <b>ИК</b> - метод пятизондового индукционного каротажа; <br />
                <b>БК</b> - метод бокового каротажа; <br />
                <b>БКЗ</b> - метод бокового каротажного зондирования; <br />
                <b>5БК</b> - метод многозондового бокового каротажа; <br />
                <b>Резистивиметрия</b> - метод определения УЭС промывочной
                жидкости в скважине
              </>
            }
            picture="method1.png"
          />
          <Method
            methodName={t("descriptions:methodRadio")}
            text={
              <>
                <b>ГК</b> - метод гамма каротажа; <br />
                <b>ГК-С</b> - метод спектрометрического гамма каротажа; <br />
                <b>НГК</b> - метод нейтронного гамма каротажа; <br />
                <b>2ННКт</b> - метод двухзондового нейтрон-нейтронного каротажа;{" "}
                <br />
                <b>ГГК-ЛП</b> - метод литоплотностного гамма-гамма каротажа;{" "}
                <br />
                <b>ГГКц</b> - метод гамма-гамма цементометрия
              </>
            }
            picture="method2.png"
          />
          <Method
            methodName={t("descriptions:methodAcoustic")}
            text={
              <>
                <b>АК</b> - метод акустического каротажа; <br />
                <b>ВАК</b> - метод волнового акустического каротажа; <br />
                <b>АКЦ</b> - метод акустического каротажа для определения
                качества цементирования
              </>
            }
            picture="method3.png"
          />
          <Method
            methodName={t("descriptions:methodMechanics")}
            text={
              <>
                <b>Термометрия</b> - метод определения температуры по стволу
                скважины; <br />
                <b>Профилеметрия</b> - метод определения диаметра по стволу
                скважины; <br />
                <b>Инклинометрия</b> - метод определения пространственного
                положения ствола скважины; <br />
                <b>ЛМ, ЛПО</b> - метод электромагнитного локатора муфт и
                локатора перфорационных отверстий
              </>
            }
            picture="method4.png"
          />
        </Flex>
      </Container>
    </Box>
  );
};

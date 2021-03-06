import { CustomSlider } from "Components/Common/CustomSlider";

export const GtiSlider = () => {
  return (
    <CustomSlider
      bg="#23242B"
      sliderData={[
        {
          title: "Геологические задачи",
          imageUrl: "gtiSlide1.png",
          text: `• Литологическое расчленение разреза;

          • Определение пластов-коллекторов;

          • Определение характера насыщения пластов-коллекторов;

          • Оценка фильтрационно-емкостных свойств пластов-коллекторов;

          • Выявление реперных горизонтов.`,
        },
        {
          title: "Технологические задачи",
          imageUrl: "gtiSlide2.png",
          text: `• Раннее обнаружение газонефтеводопроявлений и поглощений при бурении;

          • Оптимизация процесса углубления скважины;

          • Выбор и поддержание рационального режима бурения с контролем отработки долот;

          • Контроль гидродинамических давлений в скважине;

          • Диагностика предаварийных ситуаций в реальном масштабе времени.`,
        },
        {
          title: "Информационные задачи",
          imageUrl: "gtiSlide3.png",
          text: `• Сбор, обработка и накопление геолого-технологической информации в базе данных для ее дальнейшего использования;

          • Передача по требованию заказчика получаемой информации со станции ГТИ по каналам связи, в офис Заказчика в режиме онлайн, в т.ч. на мобильное устройство на базе iOS, Android.`,
        },
      ]}
    />
  );
};

import { CustomSlider } from "Components/Common/CustomSlider";

export const AboutSlider = () => {
  return (
    <CustomSlider
      sliderData={[
        {
          title: "Квалификация",
          text: `Сотрудники производственных подразделений проходят обучение в области промышленной безопасности и охраны труда по следующим курсам: \n
          Пожарная безопасность;\n
          Электро-безопасность;\n
          Безопасная эксплуатация сосудов, работающих под давленеим;\n
          Оказание первой доврачебной помощи;\n
          Противофонтанная безопасность;\n 
          Безопасное ведение работ на месторождениях с высоким содержанием сероводорода.`,
          imageUrl: "aboutSlide1.png",
        },
        {
          title: "Соблюдение правил безопасности",
          text: "Приоритетными задачами Компании является обеспечение безопасных условий труда работников, защиты здоровья персонала и населения, проживающего в районах деятельности, а также сохранение благоприятной окружающей среды и минимизация влияния на климатические изменения на основе использования наилучших доступных технологий.",
          imageUrl: "aboutSlide2.png",
        },
      ]}
    />
  );
};

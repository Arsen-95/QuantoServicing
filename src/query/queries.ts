import axios from "axios";




export const request = async (locale: any, direction: any) => {
  const query = await axios({
    method: 'get',
    url: `https://quanto-servicing.herokuapp.com/${locale}/api/${direction}`,
  })
  return query.data;
};


// const getStaticProps = async (locale: any, direction: any) => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery('', () => request(locale, direction));
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }

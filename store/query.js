// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const questionsApi = createApi({
//   reducerPath: 'questionsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa',
//     prepareHeaders(headers) {
//       headers.set('Authorization', process.env.API_KEY);
//       return headers;
//     },
//   }),
//   tagTypes: ['Questions', 'Answers'],
//   endpoints: (builder) => ({
//     allQuestions: builder.query({
//       query: (productId) => `/questions?product_id=${productId}&count=50`,
//       providesTags: ['Questions'],
//     }),
//     addQuestion: builder.mutation({
//       query: ({ ID, body, name, email }) => ({
//         url: '/questions',
//         method: 'POST',
//         body: {
//           body,
//           name,
//           email,
//           product_id: ID,
//         },
//       }),
//       invalidatesTags: ['Questions'],
//     }),
//     addQuestionHelpful: builder.mutation({
//       query: (questionId) => ({
//         url: `/questions/${questionId}/helpful`,
//         method: 'PUT',
//       }),
//       invalidatesTags: ['Questions'],
//     }),
//     reportQuestion: builder.mutation({
//       query: (questionId) => ({
//         url: `/questions/${questionId}/report`,
//         method: 'PUT',
//       }),
//       invalidatesTags: ['Questions'],
//     }),
//     answerList: builder.query({
//       query: (questionId) => `/questions/${questionId}/answers`,
//       providesTags: ['Answers'],
//     }),
//     addAnswer: builder.mutation({
//       query: ({ ID, body, name, email }) => ({
//         url: `/questions/${ID}/answers`,
//         method: 'POST',
//         body: {
//           body,
//           name,
//           email,
//         },
//       }),
//       invalidatesTags: ['Answers'],
//     }),
//     addAnswerHelpful: builder.mutation({
//       query: (answerId) => ({
//         url: `/answers/${answerId}/helpful`,
//         method: 'PUT',
//       }),
//       invalidatesTags: ['Answers'],
//     }),
//     reportAnswer: builder.mutation({
//       query: (questionId) => ({
//         url: `/answers/${questionId}/report`,
//         method: 'PUT',
//       }),
//       invalidatesTags: ['Answers'],
//     }),
//   }),
// });

// export const {
//   useAllQuestionsQuery,
//   useAddQuestionMutation,
//   useAddQuestionHelpfulMutation,
//   useReportQuestionMutation,
//   useAnswerListQuery,
//   useAddAnswerMutation,
//   useAddAnswerHelpfulMutation,
//   useReportAnswerMutation,
// } = questionsApi;

import { createSlice } from "@reduxjs/toolkit";

const  questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

const questionsSlice = createSlice({
    name: 'question',
    initialState: questions,
    reducers: {
        addNewQuestion(state, action) {
            //action holds the question
            //we just add the new question question id as the key and the question it self as value
            //new question format 
            /*
            action.payload = {
            id : questionId,
            author : currently loggedin user id,
            timestamp : ,
            optionOne : {
            votes : [],
            text : optionOneRef.current.value
            }
            optionTwo : {
            votes : [],
            text : optionTwoRef.current.value
            }
            }
            */
            let newQuestionId = action.payload.id;
            state[newQuestionId] = action.payload;
        },
        updateQuestionVoter(state, action) {
            // action .payload => {question id , currently user id , vote option}
            //target the question key with the question id then access the vote option key with vote option value sent in args 
            //then push user id in the votes array of that option
          const id = action.payload.questionId;
          const voteOption = action.payload.voteOption;
          const userId = action.payload.userId;
          state[id][voteOption]['votes'].push(userId);
          

        }
    }
});



export const questionsActions = questionsSlice.actions;
export default questionsSlice;
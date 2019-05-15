import { FeedbackExpectation } from './feedback-expectation.enum';

export interface Feedback{
    id: number,
    expectation: FeedbackExpectation,
    rating: number,
    timePlayed: number
}
import { gql } from "@apollo/client";

export const MY_VOTE = gql`
  query myVote(
    $unionID: UnifiedID!
    $electionID: UnifiedID!
    $receiptID: String!
  ) {
    myVote(unionID: $unionID, electionID: $electionID, receiptID: $receiptID) {
      id
      ballotID
      respondentID
      imageURL
      optionID
      respondedAt
      mode
      ipAddress
      userAgent
      respondent {
        id
        firstName
        lastName
      }
      votedFor {
        title
      }
      recieptID
      abstained
    }
  }
`;

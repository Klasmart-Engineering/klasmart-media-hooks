import { gql, useQuery } from '@apollo/client';
import { box } from 'tweetnacl'
import React, { useState, useEffect } from "react";

const AUDIO_METADATA_FOR_USER = gql`
query audioMetadataForUser($userId: String!) {
  audioMetadataForUser(userId: $userId) {
    id
    userId
    roomId
    h5pId
    h5pSubId
    creationDate
  }
}
`

export const decrypt = (
  secretOrSharedKey: Uint8Array,
  messageWithNonce: string,
): Uint8Array => {
  const messageWithNonceAsUint8Array = Buffer.from(messageWithNonce, 'base64')
  const nonce = messageWithNonceAsUint8Array.slice(0, box.nonceLength)
  const message = messageWithNonceAsUint8Array.slice(
    box.nonceLength,
    messageWithNonce.length,
  )

  const decrypted = box.open.after(message, nonce, secretOrSharedKey)

  if (!decrypted) {
    throw new Error('Could not decrypt message')
  }

  return decrypted
}

//   const { loading, error, data } = useQuery(GET_REQUIRED_DOWNLOAD_INFO, {
//     variables: { audioId: '54b140c0-7703-4a5d-b0c7-ea59a0c4b4eb', organizationId: 'org1' },
//   });


// userId, roomId, h5pId, h5pSubId
const AudioList = () => {
  const { loading, error, data } = useQuery(AUDIO_METADATA_FOR_USER, {
    variables: { userId: '22b1d72e-eb06-5bb4-b90a-0aff3dd855c6' },
  });
  //const [audioId, setAudioId] = useState("");
  // if (loading) return <p>Loading ...</p>;
  // if (error) {
  //   return <p>error: {JSON.stringify(error, null, 2)}</p>;
  // }
  //'54b140c0-7703-4a5d-b0c7-ea59a0c4b4eb'
  // data.audioMetadataForUser.map((item: any) => {
  //   return <button onClick={() => setAudioId(item.id)}>Audio ID: {item.id}</button>;
  // })
  const [blah, toggle] = useState(() => {});
  if (loading || error) {
    return (
      <div>
        <button onClick={() => toggle}>{"Play"}</button>
      </div>
    );
  }
  return (
    <div>
      {(data?.audioMetadataForUser ?? []).map((item: any) => {
        //return Player('org1', item.id);
        return <h1>Hello...</h1>;
      })}
    </div>
  );
  //return Player('org1', audioId)
}


export default AudioList;

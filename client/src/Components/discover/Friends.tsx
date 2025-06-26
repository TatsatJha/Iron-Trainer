import React, { useEffect } from 'react'
import { collection, getDocs, query } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { FaUserFriends } from 'react-icons/fa';

export default function friends() {
    const [friends, setFriends] = React.useState<Array<{id: string, name: string}>>([])

    useEffect(()=>{
        const fetchData = async () => {
            let newFriends:Array<{id:string, name: string}> = []
              const q = query(collection(firestore, "users"));
              const usersRef = await getDocs(q);
              usersRef.forEach((user)=>{
                const friend = {id: user.id, name: user.data().name}
                newFriends.push(friend)
              })
            setFriends(newFriends)
        };
        fetchData();
    },[])
  return (
    <div className='flex flex-col items-center justify-center mt-16'>
        <div className='text-center mb-8 flex items-center justify-between'>
            <FaUserFriends className='text-3xl mx-4' />
            <h1 className='text-3xl font-bold'>Make Friends</h1>
        </div>
        <div className='grid grid-cols-1 gap-4 mt-16 md:grid-cols-3 mx-16'>
            {
                friends.map((e, index)=>{
                    return(
                        <div key={e.id} className='flex flex-col items-center justify-center'>
                            <p className='text-center text-gray-600 mt-4'>{e.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

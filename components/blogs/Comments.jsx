import React from 'react';
import Image from 'next/image';
import AnimatedDiv from '../AnimatedDiv';

const Comments = ({ comments }) => {
	console.log(comments);

	return (
		<AnimatedDiv>
			<div className='py-10'>
				<h1 className='text-sky-500/75 font-extrabold text-3xl'>Comments</h1>
				<div className='py-4'>
					{comments?.map((comment) => (
						<div key={comment?._id} className='pb-4'>
							<div className='flex items-center'>
								<Image src={comment?.authorImage} width={70} height={70} alt="author-image" className="rounded-full" />
								<h4 className='font-bold text-lg ml-4'>{comment?.author}</h4>
							</div>
							<div className='p-1 md:p-3'>
								<p className='italic'>
									{comment?.comment}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</AnimatedDiv>
	)
}

export default Comments
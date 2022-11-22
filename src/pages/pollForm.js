import React from 'react'
import Header from '../components/header'
import PollFormRoot from '../form/FormRoot'

function PollFormPage() {

    return (
        <div className="page-root">
            <Header />

            <main className='container container--full'>
                <article className='container'>

                    <PollFormRoot />

                </article>
            </main>

        </div>
    )

}

export default PollFormPage
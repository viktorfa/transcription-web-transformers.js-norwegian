import { AudioManager } from "./components/AudioManager";
import Transcript from "./components/Transcript";
import { useTranscriber } from "./hooks/useTranscriber";

function App() {
    const transcriber = useTranscriber();

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='container flex flex-col justify-center items-center'>
                <h1 className='sm:text-6xl text-5xl font-extrabold tracking-tight text-slate-900 text-center'>
                    Enkel transkribering
                </h1>
                <h2 className='mt-3 mb-5 px-4 text-center text-1xl font-semibold tracking-tight text-slate-900 sm:text-2xl'>
                    Gjør lyd til tekst enkelt på din enhet
                </h2>
                <AudioManager transcriber={transcriber} />
                <Transcript transcribedData={transcriber.output} />
                <div className='font-light text-gray-800'>
                    <p>
                        Dette er en forenklet KI som kjører direkte på din
                        enhet.
                    </p>
                    <p>
                        For bedre resultater og mer funksjonalitet, logg inn på{" "}
                        <a
                            className='underline'
                            target='_blank'
                            href='https://teksta.no'
                        >
                            Teksta.no
                        </a>
                    </p>
                    <p className='mt-2'>
                        Ca 150 MB må lastes ned ved kjøring. Beregn omtrent 10
                        sekunder per minutt med audio.
                    </p>
                </div>
            </div>

            <div className='absolute bottom-4 flex flex-col space-y-2 items-center'>
                <span>
                    Levert av{" "}
                    <a
                        href='https://teksta.no'
                        target='_blank'
                        className='underline'
                    >
                        Teksta.no
                    </a>
                </span>
                <span>
                    Lagd med{" "}
                    <a
                        className='underline'
                        target='_blank'
                        href='https://github.com/xenova/transformers.js'
                    >
                        Transformers.js
                    </a>{" "}
                    og KI fra OpenAI og{" "}
                    <a
                        href='https://ai.nb.no/'
                        className='underline'
                        target='_blank'
                    >
                        Nasjonalbiblioteket
                    </a>
                </span>
            </div>
        </div>
    );
}

export default App;

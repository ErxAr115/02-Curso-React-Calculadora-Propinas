import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

interface TipFormProps {
    setTip: Dispatch<SetStateAction<number>>
    tip: number
}

function TipForm({setTip, tip} : TipFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {tipOptions.map(tipOpt => (
                    <div className="flex gap-2" key={tipOpt.id}>
                        <label htmlFor={tipOpt.id}>{tipOpt.label}</label>
                        <input 
                            id={tipOpt.id} 
                            type="radio" 
                            name="tip" 
                            value={tipOpt.value} 
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOpt.value === tip}/>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default TipForm
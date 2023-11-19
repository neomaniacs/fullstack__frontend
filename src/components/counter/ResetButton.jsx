export default function ResetButton({resetMethod}) {

    return (
        <div className="Counter">
        <div>
          <button className="resetButton" onClick={resetMethod}>
            Reset
          </button>
        </div>
      </div>    
      )
}
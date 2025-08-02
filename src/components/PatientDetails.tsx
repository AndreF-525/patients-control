import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store"

type PatientDetailsProps = {
  patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
  
  /* const deletePatient = usePatientStore((state) => state.deletePatient)
  const getPatientById = usePatientStore((state) => state.getPatientById) */

  //Tambien se puede asi:
  const {deletePatient, getPatientById} = usePatientStore()
  

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label='ID' data={patient.id} />
      <PatientDetailItem label='Nombre' data={patient.name} />
      <PatientDetailItem label='Propietario' data={patient.caretaker} />
      <PatientDetailItem label='Correo' data={patient.email} />
      <PatientDetailItem label='Fecha de Alta' data={patient.date.toString()} />
      <PatientDetailItem label='Síntomas' data={patient.symptoms} />

      <div className="flex justify-between">
        <button
          type="button"
          className="py-2 px-10 mt-10 text-white uppercase font-bold rounded-lg bg-indigo-600 hover:bg-indigo-900 cursor-pointer"
          onClick={() => getPatientById(patient.id)}>
            Editar
          </button>

        <button
          type="button"
          className="py-2 px-10 mt-10 text-white uppercase font-bold rounded-lg bg-red-600 hover:bg-red-900 cursor-pointer" onClick={() => deletePatient(patient.id)}>
            Eliminar
        </button>
      </div>
    </div>
  )
}

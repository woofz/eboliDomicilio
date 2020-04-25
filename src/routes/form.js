export default function Form() {
	return (
		<div class="">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/form/success">
				<p>
					<input type="hidden" name="form-name" value="contact" />
				</p>
				<div class="flex flex-wrap mx-3 mb-3 mt-5">
					<div class="w-full md:w-1/2 px-3 mt-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-name">
							Nome
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-name" required type="text" name="name" />
					</div>
					<div class="w-full md:w-1/2 px-3 mt-6 md:mt-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
							Numero di telefono
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-phone" type="text" name="telephone" />
					</div>
				</div>
				<div class="flex flex-wrap mx-3 mb-3 md:mt-8">
					<div class="w-full md:w-1/2 px-3 mt-3 md:mt-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
							Email
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-email" type="text" name="mail" />
					</div>
					<div class="w-full md:w-1/2 px-3 mt-6 md:mt-0">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-website">
							Sito Web
						</label>
						<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="grid-website" type="text" name="site" />
					</div>
				</div>

				<div class="flex flex-wrap mx-3 mb-6 mt-6 md:mt-8">
					<div class="w-full px-3">
					<label class="block uppercase tracking-wide text-gray-700 select-gray-700 text-xs font-bold mb-2">Tipologia di servizio
							<select	class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" required name="type">
								<option disabled="" value="">Premi per selezionare una tipologia</option>
								<option value="salute">Salute</option>
								<option value="elettronica_elettrodomestici">Elettronica/Elettrodomestici</option>
								<option value="gelaterie">Gelateria</option>
								<option value="macellerie">Macelleria</option>
								<option value="panifici">Panifici</option>
								<option value="generi alimentari">Generi Alimentari</option>
								<option value="pesce fresco e surgelato">Pesce Fresco/Surgelato</option>
								<option value="ristorazione">Ristorazione</option>
								<option value="enoteca e birre">Enoteca e Birre</option>
								<option value="frutta fresca">Frutta Fresca</option>
								<option value="abbigliamento">Abbigliamento</option>
								<option value="supermercati">Supermercati</option>
								<option value="pasticceria">Pasticceria</option>
								<option value="pizzerie">Pizzeria</option>
								<option value="lavanderie">Lavanderia</option>
								<option value="informatica">Informatica</option>
								<option value="prodotti e servizi per animali">Prodotti per Animali</option>
							</select>
						</label>
					</div>
				</div>



				<div class="flex flex-wrap mx-3 mb-6 mt-6 md:mt-8">
					<div class="w-full px-3">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-note">
							Note
						</label>
						<textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" rows="5" id="grid-note" type="text" name="note" placeholder="Esempio: orari di consegna, tipologie di prodotti esclusi, ecc." />
					</div>
				</div>
				<p class="my-5 mx-6 md:mt-8">
					<button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Invia</button>
				</p>
			</form>
		</div>
	);
}
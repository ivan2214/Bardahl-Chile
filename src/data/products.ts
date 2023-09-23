import { type Product } from '@/types'

export const productsDb: Product[] = [
  {
    id: 1,
    name: 'xentx-uso-profesional',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/09/XENTX.jpg',
    descripcion: 'Es un limpiador de uso profesional que proporciona una acción de limpieza rápida y profunda al sistema de inyección.',
    whyUseIt: 'Los motores de última generación para que rindan correctamente necesitan la realización de una limpieza profunda de todo el sistema de inyección cada un determinado período de tiempo, evitando así problemas ocasionados por el uso normal del motor.',
    benefic: ' Gracias a su efecto de shock, limpia de forma rápida, segura y económica. - Elimina el carbón en válvulas y pistones. - Mejora la potencia, el pique y la performance del motor. - Economiza combustible. - Aumenta la vida del motor. - Suaviza el funcionamiento del motor generando una sensación más placentera de manejo. - Disminuye ruidos del motor. - Menor emisión de gases contaminantes. - Formulado para el mantenimiento profesional.',
    instrucctions: 'Agregar en el tanque de combustible el contenido de una botella en 15 litros de gasoil o nafta, consumir la mayor cantidad posible antes de la recarga. Puede ser utilizado en máquinas profesionales de limpieza con un envase en 2 a 4 litros de combustible.'
  },
  {
    id: 2,
    name: 'limpia-inyectores-nafta',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/LIMPIA-INYECTORES-NAFTA-GRUPAL.jpg',
    descripcion: 'Brinda una rápida y profunda acción de limpieza en inyectores y válvulas de los motores nafteros.    ',
    whyUseIt: 'El sistema de inyección es muy sensible a las impurezas formadas por los combustibles. Su uso habitual mantiene todo el sistema limpio por más tiempo, mejorando el rendimiento del motor, reduciendo gastos de mantenimiento.',
    benefic: 'Limpieza profunda del inyector y el sistema. - Elimina el carbón en válvulas y pistones. - Mejora el arranque, la aceleración y potencia del motor. - Suaviza el funcionamiento del motor generando una sensación más placentera de manejo en ciudad como en ruta. - Disminuye el consumo de combustible. - Aumenta la vida del motor. - Disminuye paradas por mantenimiento. - Menor emisión de gases contaminantes. - Apto para todo tipo de naftas y alconaftas.',
    instrucctions: 'Agregar el contenido del envase antes de llenado con nafta. Repetir el tratamiento cada 4 cargas. Para mantenerlo limpio agregar Optimizador de Nafta de Bardahl.',
    benefitsAndlitersToTreat: {
      'inye-110': 'Trata 20lts de nafta',
      'inye-250': 'Trata 40lts de nafta',
      'inye-500': 'Trata 60lts de nafta',
      more: 'También se comercializa en baldes de 20L. y 204L.'
    }
  },
  {
    id: 3,
    name: 'Lava-parabrisas-Concentrado',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Lava-parabrisas-Concentrado.jpg',
    descripcion: 'Limpia y remueve sin esfuerzo todo tipo de suciedad del parabrisas.',
    whyUseIt: 'Porque una mejor visión ayuda a evitar accidentes tanto en la ciudad como en la ruta.',
    benefic: 'Mejora la visibilidad. - Rinde el doble. - Mayor seguridad en el manejo . - Su uso habitual ofrece una mayor durabilidad de la escobilla limpia parabrisas. - Producto aprobado por ANMAT (Administración Nacional de Medicamentos, Alimentos y Tecnología Médica).',
    instrucctions: 'Agregar al depósito del lava parabrisas la mitad del contenido del envase y completar con agua desmineralizada.',
    prestaciones: '1L., 20L., 204L'
  },
  {
    id: 4,
    name: 'LIMPIA-INYECTORES-DIESEL-GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/LIMPIA-INYECTORES-DIESEL-GRUPAL.jpg',
    categoria: 'Limpieza de inyectores',
    descripcion: 'El LIMPIA-INYECTORES-DIESEL-GRUPAL es un producto de última generación especialmente diseñado para mantener los inyectores de tu motor diésel en óptimas condiciones. Con su fórmula avanzada, elimina los depósitos y sedimentos acumulados en los inyectores, mejorando así la atomización del combustible y asegurando una combustión más eficiente.',
    whyUseIt: '¿Por qué usar LIMPIA-INYECTORES-DIESEL-GRUPAL? Mantener los inyectores limpios es esencial para asegurar un rendimiento óptimo de tu motor diésel. El LIMPIA-INYECTORES-DIESEL-GRUPAL no solo mejora la eficiencia de la combustión, sino que también ayuda a reducir las emisiones contaminantes y a prevenir problemas como el bloqueo de los inyectores.',
    benefic: 'Beneficios de usar LIMPIA-INYECTORES-DIESEL-GRUPAL:\n- Limpia y desbloquea los inyectores de combustible\n- Mejora la atomización del combustible\n- Optimiza la eficiencia de la combustión\n- Reduce las emisiones contaminantes\n- Previene problemas de rendimiento y obstrucciones\n- Compatible con motores diésel de todo tipo',
    instrucctions: 'Modo de uso de LIMPIA-INYECTORES-DIESEL-GRUPAL:\n1. Asegúrate de que el motor esté apagado y frío.\n2. Agita bien el producto antes de usar.\n3. Vierte el contenido completo de una botella en el tanque de combustible.\n4. Vuelve a llenar el tanque con combustible diésel.\n5. Conduce normalmente para permitir que el producto se mezcle con el combustible.\n6. Repite el tratamiento cada cierto intervalo de tiempo según las recomendaciones del fabricante.'
  },
  {
    id: 5,
    name: 'Diseno-sin-titulo-52',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2021/01/Diseno-sin-titulo-52.png',
    categoria: 'Aceite sintético',
    descripcion: 'El Diseno-sin-titulo-52 es un aceite sintético de alto rendimiento especialmente formulado para proporcionar una lubricación superior y una protección óptima a tu motor. Su fórmula avanzada ayuda a reducir el desgaste, la fricción y la formación de depósitos, garantizando un funcionamiento suave y eficiente del motor en diversas condiciones.',
    whyUseIt: '¿Por qué usar Diseno-sin-titulo-52? Este aceite sintético ofrece una serie de beneficios que mejorarán el rendimiento y la durabilidad de tu motor:\n- Lubricación superior en todas las condiciones de funcionamiento\n- Reducción del desgaste y la fricción\n- Protección contra la formación de depósitos\n- Mayor resistencia a altas temperaturas\n- Mejor fluidez en climas fríos\n- Contribuye a una mayor vida útil del motor',
    benefic: 'Beneficios de usar Diseno-sin-titulo-52:\n- Lubricación superior y protección contra el desgaste\n- Mejora la eficiencia y el rendimiento del motor\n- Reduce los depósitos y la acumulación de sedimentos\n- Mayor resistencia a altas temperaturas\n- Facilita el arranque en climas fríos\n- Contribuye a una mayor vida útil del motor\n- Compatible con motores de gasolina y diésel',
    instrucctions: 'Recomendaciones para el uso de Diseno-sin-titulo-52:\n1. Verifica las especificaciones y recomendaciones del fabricante del vehículo.\n2. Asegúrate de que el motor esté apagado y frío.\n3. Drena el aceite usado y cambia el filtro de aceite si es necesario.\n4. Llena el cárter con la cantidad recomendada de Diseno-sin-titulo-52.\n5. Aprieta correctamente el tapón de llenado de aceite.\n6. Arranca el motor y verifica que no haya fugas de aceite.\n7. Realiza los cambios de aceite según las indicaciones del fabricante.'
  },
  {
    id: 6,
    name: 'LAVA-PARABRISAS-BAJAS-TEMPERATURAS',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/LAVA-PARABRISAS-BAJAS-TEMPERATURAS.jpg',
    categoria: 'Cuidado del parabrisas',
    descripcion: 'El LAVA-PARABRISAS-BAJAS-TEMPERATURAS es un producto especialmente diseñado para limpiar y desengrasar eficazmente el parabrisas de tu vehículo, incluso en condiciones de bajas temperaturas. Su fórmula avanzada garantiza una visibilidad clara y sin rayas, mejorando así tu seguridad al conducir.',
    whyUseIt: '¿Por qué usar LAVA-PARABRISAS-BAJAS-TEMPERATURAS? Aquí tienes algunas razones para elegir este producto:\n- Limpia y desengrasa eficazmente el parabrisas\n- Elimina insectos, suciedad y residuos de la carretera\n- Proporciona una visibilidad clara incluso en bajas temperaturas\n- Evita la formación de rayas y marcas en el parabrisas\n- Fácil de usar y compatible con todo tipo de vehículos',
    benefic: 'Beneficios de usar LAVA-PARABRISAS-BAJAS-TEMPERATURAS:\n- Limpieza efectiva y desengrase del parabrisas\n- Mejora la visibilidad en condiciones de bajas temperaturas\n- Elimina insectos, suciedad y residuos de la carretera\n- Evita la formación de rayas y marcas en el parabrisas\n- Fácil de usar y compatible con todo tipo de vehículos\n- Proporciona una conducción segura y cómoda',
    instrucctions: 'Modo de uso de LAVA-PARABRISAS-BAJAS-TEMPERATURAS:\n1. Asegúrate de que el motor esté apagado y el vehículo esté estacionado.\n2. Agita bien el producto antes de usar.\n3. Vierte una cantidad adecuada de LAVA-PARABRISAS-BAJAS-TEMPERATURAS en el depósito del limpiaparabrisas.\n4. Asegúrate de que el depósito esté correctamente cerrado.\n5. Activa el sistema de limpiaparabrisas para distribuir el producto.\n6. Limpia el parabrisas con las escobillas para eliminar la suciedad.\n7. Verifica la visibilidad y repite el proceso si es necesario.'
  },
  {
    id: 7,
    name: 'OPTIMIZADOR-DE-NAFTA-GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/OPTIMIZADOR-DE-NAFTA-GRUPAL.jpg',
    categoria: 'Mejorador de combustible',
    descripcion: 'El OPTIMIZADOR-DE-NAFTA-GRUPAL es un producto revolucionario diseñado para mejorar la calidad y el rendimiento de la gasolina en tu vehículo. Su fórmula única actúa como un mejorador de combustible, optimizando la combustión y reduciendo el consumo de combustible, al tiempo que protege y limpia el sistema de combustión.',
    whyUseIt: '¿Por qué usar OPTIMIZADOR-DE-NAFTA-GRUPAL? Aquí te damos algunas razones para considerar este producto:\n- Mejora la calidad y el rendimiento de la gasolina\n- Optimiza la combustión y reduce el consumo de combustible\n- Protege y limpia el sistema de combustión\n- Contribuye a una mayor potencia y respuesta del motor\n- Reduce las emisiones contaminantes\n- Compatible con todo tipo de vehículos y motores de gasolina',
    benefic: 'Beneficios de usar OPTIMIZADOR-DE-NAFTA-GRUPAL:\n- Mejora la calidad y el rendimiento de la gasolina\n- Optimiza la combustión y reduce el consumo de combustible\n- Protege y limpia el sistema de combustión\n- Contribuye a una mayor potencia y respuesta del motor\n- Reduce las emisiones contaminantes\n- Compatible con todo tipo de vehículos y motores de gasolina\n- Fácil de usar y aplicar',
    instrucctions: 'Modo de uso de OPTIMIZADOR-DE-NAFTA-GRUPAL:\n1. Asegúrate de que el motor esté apagado y el vehículo esté estacionado.\n2. Agita bien el producto antes de usar.\n3. Vierte la cantidad recomendada de OPTIMIZADOR-DE-NAFTA-GRUPAL en el tanque de combustible.\n4. Vuelve a llenar el tanque con gasolina.\n5. Conduce normalmente para permitir que el producto se mezcle con la gasolina.\n6. Repite el tratamiento cada cierto intervalo de tiempo según las recomendaciones del fabricante.'
  },
  {
    id: 8,
    name: 'OPTIMIZADOR-GAS-OIL-GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/OPTIMIZADOR-GAS-OIL-GRUPAL.jpg',
    categoria: 'Mejorador de combustible',
    descripcion: 'El OPTIMIZADOR-GAS-OIL-GRUPAL es un producto de alto rendimiento diseñado específicamente para mejorar la calidad y el rendimiento del gasóleo en motores diésel. Su fórmula avanzada actúa como un mejorador de combustible, optimizando la combustión y reduciendo el consumo de combustible, al tiempo que protege y limpia el sistema de inyección.',
    whyUseIt: '¿Por qué usar OPTIMIZADOR-GAS-OIL-GRUPAL? Aquí te damos algunas razones para considerar este producto:\n- Mejora la calidad y el rendimiento del gasóleo\n- Optimiza la combustión y reduce el consumo de combustible\n- Protege y limpia el sistema de inyección\n- Contribuye a una mayor potencia y respuesta del motor\n- Reduce las emisiones contaminantes\n- Compatible con todo tipo de motores diésel',
    benefic: 'Beneficios de usar OPTIMIZADOR-GAS-OIL-GRUPAL:\n- Mejora la calidad y el rendimiento del gasóleo\n- Optimiza la combustión y reduce el consumo de combustible\n- Protege y limpia el sistema de inyección\n- Contribuye a una mayor potencia y respuesta del motor\n- Reduce las emisiones contaminantes\n- Compatible con todo tipo de motores diésel\n- Fácil de usar y aplicar',
    instrucctions: 'Modo de uso de OPTIMIZADOR-GAS-OIL-GRUPAL:\n1. Asegúrate de que el motor esté apagado.\n2. Agita bien el producto antes de usar.\n3. Vierte la cantidad recomendada de OPTIMIZADOR-GAS-OIL-GRUPAL en el tanque de combustible.\n4. Vuelve a llenar el tanque con gasóleo.\n5. Conduce normalmente para permitir que el producto se mezcle con el gasóleo.\n6. Repite el tratamiento cada cierto intervalo de tiempo según las recomendaciones del fabricante.'
  },
  {
    id: 9,
    name: 'Lava-Parabrisas-Listo-para-Usar',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Lava-Parabrisas-Listo-para-Usar.jpg',
    categoria: 'Líquido limpiaparabrisas',
    descripcion: 'El Lava-Parabrisas-Listo-para-Usar es un líquido limpiaparabrisas de alta calidad diseñado para garantizar una limpieza efectiva y una visión clara en todo momento. Su fórmula especializada ayuda a eliminar la suciedad, los insectos y otros residuos del parabrisas, proporcionando una visibilidad óptima para una conducción segura.',
    whyUseIt: '¿Por qué usar Lava-Parabrisas-Listo-para-Usar? Aquí te damos algunas razones para considerar este producto:\n- Limpia eficazmente el parabrisas y mejora la visibilidad\n- Elimina la suciedad, los insectos y otros residuos\n- Fórmula de secado rápido para una visión clara sin dejar rastros\n- Apto para todo tipo de vehículos\n- Fácil de usar y aplicar',
    benefic: 'Beneficios de usar Lava-Parabrisas-Listo-para-Usar:\n- Limpia eficazmente el parabrisas y mejora la visibilidad\n- Elimina la suciedad, los insectos y otros residuos\n- Proporciona una visión clara y sin obstrucciones\n- Fórmula de secado rápido sin dejar rastros\n- Apto para todo tipo de vehículos\n- Fácil de usar y aplicar',
    instrucctions: 'Modo de uso de Lava-Parabrisas-Listo-para-Usar:\n1. Asegúrate de que el vehículo esté estacionado y el motor apagado.\n2. Abre el capó y localiza el depósito de líquido limpiaparabrisas.\n3. Retira la tapa del depósito y vierte el Lava-Parabrisas-Listo-para-Usar hasta el nivel indicado.\n4. Vuelve a colocar la tapa del depósito.\n5. Acciona el sistema de limpiaparabrisas para distribuir el líquido y limpiar el parabrisas.\n6. Comprueba el nivel de líquido periódicamente y rellénalo cuando sea necesario.'
  },
  {
    id: 11,
    name: 'TIR-TIPO-CONCENTRADO',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/TIR-TIPO-CONCENTRADO.jpg',
    categoria: 'Refrigerante para radiadores',
    descripcion: 'El TIR-TIPO-CONCENTRADO es un refrigerante de alta calidad diseñado para proteger el sistema de enfriamiento del motor. Su fórmula concentrada proporciona una protección efectiva contra la corrosión, el sobrecalentamiento y la formación de depósitos en el radiador, garantizando un óptimo rendimiento del motor y una larga vida útil.',
    whyUseIt: '¿Por qué usar TIR-TIPO-CONCENTRADO? Aquí te damos algunas razones para considerar este producto:\n- Protege el sistema de enfriamiento del motor\n- Evita la corrosión y la formación de depósitos en el radiador\n- Previene el sobrecalentamiento del motor\n- Mejora la transferencia de calor\n- Aumenta la eficiencia del sistema de enfriamiento\n- Compatible con todo tipo de vehículos',
    benefic: 'Beneficios de usar TIR-TIPO-CONCENTRADO:\n- Protege el sistema de enfriamiento del motor\n- Evita la corrosión y la formación de depósitos en el radiador\n- Previene el sobrecalentamiento del motor\n- Mejora la transferencia de calor\n- Aumenta la eficiencia del sistema de enfriamiento\n- Prolonga la vida útil del motor\n- Fácil de usar y aplicar',
    instrucctions: 'Modo de uso de TIR-TIPO-CONCENTRADO:\n1. Asegúrate de que el motor esté frío y apagado.\n2. Localiza el tapón del radiador y afloja ligeramente para liberar la presión.\n3. Coloca un recipiente debajo del radiador para recoger el refrigerante antiguo.\n4. Drena el refrigerante antiguo girando la válvula de drenaje del radiador en sentido contrario a las agujas del reloj.\n5. Cierra la válvula de drenaje y vierte la cantidad adecuada de TIR-TIPO-CONCENTRADO en el radiador.\n6. Vuelve a colocar el tapón del radiador y asegúralo correctamente.\n7. Enciende el motor y deja que alcance la temperatura de funcionamiento normal.\n8. Comprueba el nivel de refrigerante y añade más si es necesario.'
  },
  {
    id: 12,
    name: 'OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL.jpg',
    categoria: 'Mejorador de combustible',
    descripcion: 'El OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL es un producto de alto rendimiento diseñado específicamente para mejorar la calidad y el rendimiento del gasóleo en motores diésel utilizados en el sector agrícola. Su fórmula avanzada actúa como un mejorador de combustible, optimizando la combustión y reduciendo el consumo de combustible, al tiempo que protege y limpia el sistema de inyección.',
    whyUseIt: '¿Por qué usar OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL? Aquí te damos algunas razones para considerar este producto:\n- Mejora la calidad y el rendimiento del gasóleo\n- Optimiza la combustión y reduce el consumo de combustible\n- Protege y limpia el sistema de inyección\n- Contribuye a una mayor potencia y respuesta del motor\n- Reduce las emisiones contaminantes\n- Compatible con todo tipo de motores diésel utilizados en el sector agrícola',
    benefic: 'Beneficios de usar OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL:\n- Mejora la calidad y el rendimiento del gasóleo\n- Optimiza la combustión y reduce el consumo de combustible\n- Protege y limpia el sistema de inyección\n- Contribuye a una mayor potencia y respuesta del motor\n- Reduce las emisiones contaminantes\n- Compatible con todo tipo de motores diésel utilizados en el sector agrícola\n- Fácil de usar y aplicar',
    instrucctions: 'Modo de uso de OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL:\n1. Asegúrate de que el motor esté apagado.\n2. Agita bien el producto antes de usar.\n3. Vierte la cantidad recomendada de OPTIMIZADOR-GAS-OIL-AGRO-GRUPAL en el tanque de combustible.\n4. Vuelve a llenar el tanque con gasóleo.\n5. Conduce normalmente para permitir que el producto se mezcle con el gasóleo.\n6. Repite el tratamiento cada cierto intervalo de tiempo según las recomendaciones del fabricante.'
  },
  {
    id: 13,
    name: 'REVITALIZADOR-SILICONADO',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/REVITALIZADOR-SILICONADO.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El Revitalizador Siliconado de Bardahl es un producto innovador diseñado para proteger y mejorar el rendimiento de tu motor. Su fórmula avanzada penetra en las partes metálicas, formando una capa protectora de silicona que reduce la fricción y el desgaste. Además, proporciona una mejor lubricación y ayuda a mantener el motor en óptimas condiciones.',
    whyUseIt: '¿Por qué usar el Revitalizador Siliconado de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Reduce la fricción y el desgaste en el motor.\n- Mejora la lubricación de las partes metálicas.\n- Ayuda a prevenir la formación de depósitos y residuos.\n- Protege el motor contra la oxidación y la corrosión.\n- Contribuye a prolongar la vida útil del motor.\n- Mejora el rendimiento y la eficiencia del motor.',
    instrucctions: 'Modo de uso:\n1. Agita bien el producto antes de usar.\n2. Vierte la cantidad recomendada en el motor.\n3. Enciende el motor y déjalo funcionar durante unos minutos para que el producto se distribuya por todas las partes.\n4. ¡Listo! Disfruta de los beneficios del Revitalizador Siliconado en tu motor.'
  },
  {
    id: 14,
    name: 'TIR TIPO DILUIDO',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/TIR-TIPO-DILUIDO.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El TIR Tipo Diluido de Bardahl es un aditivo especialmente formulado para mejorar el rendimiento de tu motor. Su composición única ayuda a reducir la fricción, el desgaste y el consumo de combustible, proporcionando una mayor protección y eficiencia.',
    whyUseIt: '¿Por qué usar el TIR Tipo Diluido de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Reduce la fricción y el desgaste en el motor.\n- Mejora la eficiencia y el rendimiento del motor.\n- Ayuda a reducir el consumo de combustible.\n- Protege el motor contra la corrosión y la oxidación.\n- Prolonga la vida útil del motor.\n- Facilita el arranque en frío.',
    instrucctions: 'Modo de uso:\n1. Agita bien el producto antes de usar.\n2. Vierte la cantidad recomendada en el depósito de combustible.\n3. Llena el depósito con combustible.\n4. ¡Listo! El TIR Tipo Diluido comenzará a actuar y a brindar beneficios a tu motor.'
  },
  {
    id: 15,
    name: 'Biocida',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Biocida.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El Biocida de Bardahl es un producto diseñado para proteger tu sistema de combustible contra la formación de microorganismos y hongos. Su fórmula especial ayuda a eliminar y prevenir el crecimiento de bacterias, algas y otros microorganismos que pueden obstruir los conductos y causar problemas en el motor.',
    whyUseIt: '¿Por qué usar el Biocida de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Elimina y previene la formación de bacterias y microorganismos en el sistema de combustible.\n- Evita la obstrucción de los conductos de combustible.\n- Protege el motor contra la corrosión y el desgaste causados por microorganismos.\n- Mejora el rendimiento y la eficiencia del motor.\n- Prolonga la vida útil del sistema de combustible.',
    instrucctions: 'Modo de uso:\n1. Agita bien el producto antes de usar.\n2. Vierte la cantidad recomendada en el depósito de combustible.\n3. Llena el depósito con combustible.\n4. ¡Listo! El Biocida comenzará a actuar y a proteger tu sistema de combustible.'
  },
  {
    id: 16,
    name: 'Limpia Motores',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/Limpia-Motores.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El Limpia Motores de Bardahl es un producto especialmente formulado para eliminar los depósitos de carbono y otros residuos acumulados en el motor. Su potente fórmula penetra en las partes internas del motor, disolviendo y removiendo la suciedad, mejorando así su rendimiento y eficiencia.',
    whyUseIt: '¿Por qué usar el Limpia Motores de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Elimina los depósitos de carbono y otros residuos en el motor.\n- Mejora el rendimiento y la eficiencia del motor.\n- Ayuda a reducir el consumo de combustible.\n- Restaura la potencia y la aceleración del motor.\n- Prolonga la vida útil del motor.',
    instrucctions: 'Modo de uso:\n1. Agita bien el producto antes de usar.\n2. Vierte la cantidad recomendada en el depósito de aceite del motor.\n3. Deja que el motor funcione durante unos minutos sin exigirle demasiado.\n4. Drena el aceite usado y cambia el filtro de aceite.\n5. Llena el motor con aceite nuevo de calidad.\n6. ¡Listo! Disfruta de un motor limpio y mejorado con el Limpia Motores de Bardahl.'
  },
  {
    id: 17,
    name: 'Limpia Radiadores Rápido',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Limpia-Radiadores-R%C3%A1pido.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El Limpia Radiadores Rápido de Bardahl es un producto diseñado para limpiar y desobstruir el sistema de refrigeración de tu vehículo. Su fórmula avanzada disuelve y remueve los depósitos de óxido, suciedad y sedimentos que pueden acumularse en el radiador y otros componentes del sistema, mejorando así su rendimiento y evitando problemas de sobrecalentamiento.',
    whyUseIt: '¿Por qué usar el Limpia Radiadores Rápido de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Limpia y desobstruye el sistema de refrigeración.\n- Remueve los depósitos de óxido, suciedad y sedimentos en el radiador y otros componentes.\n- Mejora el rendimiento y la eficiencia del sistema de refrigeración.\n- Evita problemas de sobrecalentamiento.\n- Prolonga la vida útil del sistema de refrigeración.',
    instrucctions: 'Modo de uso:\n1. Agita bien el producto antes de usar.\n2. Asegúrate de que el motor esté frío y apagado.\n3. Vierte el contenido completo en el radiador o en el depósito de expansión del sistema de refrigeración.\n4. Enciende el motor y déjalo funcionar durante aproximadamente 10-15 minutos.\n5. Drena el líquido del sistema de refrigeración y enjuágalo con agua limpia.\n6. Vuelve a llenar el sistema con el líquido refrigerante adecuado.\n7. ¡Listo! Tu sistema de refrigeración estará limpio y funcionando de manera óptima.'
  },
  {
    id: 18,
    name: 'XTC sintetico',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/XTC-sintetico.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El XTC Sintético de Bardahl es un lubricante de alto rendimiento formulado con tecnología sintética de última generación. Su fórmula avanzada proporciona una excelente protección y lubricación para motores de alta potencia, garantizando un funcionamiento suave y eficiente en todo momento.',
    whyUseIt: '¿Por qué usar el XTC Sintético de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Proporciona una lubricación superior en condiciones extremas de temperatura y presión.\n- Protege el motor contra el desgaste y la corrosión.\n- Mejora el rendimiento y la respuesta del motor.\n- Ayuda a reducir el consumo de combustible.\n- Prolonga la vida útil del motor.\n- Minimiza la formación de depósitos y sedimentos.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el motor esté apagado y frío.\n2. Localiza el tapón de llenado de aceite del motor.\n3. Retira el tapón y coloca un recipiente debajo para recoger el aceite usado.\n4. Drena el aceite usado por completo.\n5. Coloca el tapón de drenaje en su lugar y ajústalo correctamente.\n6. Vierte la cantidad recomendada de XTC Sintético en el orificio de llenado de aceite.\n7. Vuelve a colocar el tapón de llenado de aceite.\n8. ¡Listo! Tu motor estará protegido y lubricado con el XTC Sintético de Bardahl.'
  },
  {
    id: 19,
    name: '4t Moto',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/4t-Moto.jpg',
    categoria: 'Aceites y Lubricantes para Motor',
    descripcion: 'El 4t Moto de Bardahl es un aceite de alta calidad especialmente diseñado para motores de cuatro tiempos. Su fórmula avanzada proporciona una lubricación superior y una protección óptima para el motor, ayudando a maximizar su rendimiento y prolongar su vida útil.',
    whyUseIt: '¿Por qué usar el 4t Moto de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Proporciona una lubricación superior para motores de cuatro tiempos.\n- Protege el motor contra el desgaste y la corrosión.\n- Mejora la respuesta y la aceleración del motor.\n- Ayuda a reducir el consumo de combustible.\n- Prolonga la vida útil del motor.\n- Minimiza la formación de depósitos y sedimentos.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el motor esté apagado y frío.\n2. Localiza el tapón de llenado de aceite del motor.\n3. Retira el tapón y coloca un recipiente debajo para recoger el aceite usado.\n4. Drena el aceite usado por completo.\n5. Coloca el tapón de drenaje en su lugar y ajústalo correctamente.\n6. Vierte la cantidad recomendada de 4t Moto en el orificio de llenado de aceite.\n7. Vuelve a colocar el tapón de llenado de aceite.\n8. ¡Listo! Tu motor estará protegido y lubricado con el 4t Moto de Bardahl.'
  },
  {
    id: 20,
    name: 'Lustra Autos',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/Lustra-Autos.jpg',
    categoria: 'Accesorios para Autos',
    descripcion: 'El Lustra Autos de Bardahl es el producto ideal para mantener el brillo y la protección de la pintura de tu vehículo. Su fórmula avanzada elimina las manchas y marcas de agua, dejando una superficie limpia y reluciente. Además, protege la pintura contra los rayos UV y otros agentes externos, evitando el desgaste prematuro y manteniendo el aspecto impecable de tu auto.',
    whyUseIt: '¿Por qué usar el Lustra Autos de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Restaura el brillo y la apariencia de la pintura.\n- Elimina manchas y marcas de agua.\n- Protege contra los rayos UV y agentes externos.\n- Evita el desgaste prematuro de la pintura.\n- Fácil aplicación y resultados duraderos.',
    instrucctions: 'Modo de uso:\n1. Lava y seca el auto antes de aplicar el Lustra Autos.\n2. Agita bien el producto antes de usar.\n3. Aplica una pequeña cantidad de producto en un paño limpio y suave.\n4. Extiende el producto sobre la superficie del auto en movimientos circulares.\n5. Espera unos minutos y luego retira el exceso de producto con otro paño limpio y seco.\n6. ¡Disfruta de un auto brillante y protegido!'
  },
  {
    id: 21,
    name: 'MÁXIMA FLEX GRUPALES',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/M%C3%81XIMA-FLEX-GRUPALES.jpg',
    categoria: 'Aditivos para Grupos Diferenciales',
    descripcion: 'El MÁXIMA FLEX GRUPALES de Bardahl es un aditivo de alta calidad especialmente diseñado para grupos diferenciales. Su fórmula avanzada proporciona una lubricación superior y una protección óptima para los componentes internos del grupo diferencial, reduciendo la fricción y el desgaste, y prolongando su vida útil.',
    whyUseIt: '¿Por qué usar el MÁXIMA FLEX GRUPALES de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Reduce la fricción y el desgaste en el grupo diferencial.\n- Proporciona una lubricación superior en condiciones extremas.\n- Protege los componentes internos contra la corrosión.\n- Mejora la eficiencia y el rendimiento del grupo diferencial.\n- Prolonga la vida útil del grupo diferencial.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el grupo diferencial esté limpio y sin fugas.\n2. Agita bien el producto antes de usar.\n3. Retira el tapón de llenado del grupo diferencial.\n4. Vierte la cantidad recomendada de MÁXIMA FLEX GRUPALES en el orificio de llenado.\n5. Vuelve a colocar el tapón de llenado y ajústalo correctamente.\n6. Realiza un breve recorrido para que el producto se distribuya correctamente.\n7. ¡Disfruta de un grupo diferencial protegido y de mejor rendimiento!'
  },
  {
    id: 22,
    name: 'Top Blue',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/Top-Blue.jpg',
    categoria: 'Aditivos para Combustible',
    descripcion: 'El Top Blue de Bardahl es un aditivo para combustible de alto rendimiento que ayuda a mejorar la calidad y la eficiencia de la combustión en motores a gasolina y diesel. Su fórmula exclusiva ayuda a limpiar y proteger los sistemas de combustible, optimizando el rendimiento del motor y reduciendo el consumo de combustible.',
    whyUseIt: '¿Por qué usar el Top Blue de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Limpia y protege los sistemas de combustible.\n- Mejora la calidad y la eficiencia de la combustión.\n- Optimiza el rendimiento del motor.\n- Reduce el consumo de combustible.\n- Protege contra la corrosión y la formación de depósitos.',
    instrucctions: 'Modo de uso:\n1. Agita bien el producto antes de usar.\n2. Vierte la cantidad recomendada de Top Blue en el tanque de combustible.\n3. Reposta combustible para mezclar el aditivo con el combustible.\n4. Utiliza el vehículo de manera normal.\n5. Para obtener mejores resultados, utiliza de forma continua en cada repostaje.\n6. ¡Disfruta de un motor más limpio, eficiente y protegido!'
  },
  {
    id: 23,
    name: 'ACEITE 4T MOTOS 15W 50 Botella 1000 cm³',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/ACEITE-4T-MOTOS-15W-50-Botella-1000-cm-1.jpg',
    categoria: 'Aceites para Motor de Motos',
    descripcion: 'El ACEITE 4T MOTOS 15W 50 de Bardahl es un aceite de alta calidad especialmente formulado para motores de cuatro tiempos. Su viscosidad 15W 50 garantiza una excelente protección y lubricación en una amplia gama de condiciones y temperaturas. Este aceite ayuda a mantener el motor limpio y protegido, prolongando su vida útil y mejorando su rendimiento.',
    whyUseIt: '¿Por qué usar el ACEITE 4T MOTOS 15W 50 de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Proporciona una lubricación superior en motores de cuatro tiempos.\n- Protege contra el desgaste y la corrosión.\n- Mantiene el motor limpio y libre de depósitos.\n- Mejora el rendimiento y la respuesta del motor.\n- Prolonga la vida útil del motor.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el motor esté apagado y en una superficie nivelada.\n2. Localiza la varilla de medición del aceite en el motor.\n3. Retira la varilla de medición y límpiala con un paño limpio.\n4. Vierte la cantidad recomendada de ACEITE 4T MOTOS 15W 50 a través del orificio de llenado del aceite.\n5. Vuelve a insertar la varilla de medición hasta el tope.\n6. Retira la varilla de medición nuevamente y verifica el nivel de aceite. Ajusta si es necesario.\n7. ¡Disfruta de un motor protegido y un rendimiento óptimo!'
  },
  {
    id: 24,
    name: 'LIMPIA INYECTORES dos y cuatro tiempos',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/LIMPIA-INYECTORES-dos-y-cuatro-tiempos.jpg',
    categoria: 'Aditivos para Combustible',
    descripcion: 'El LIMPIA INYECTORES de Bardahl es un aditivo de alto rendimiento diseñado para limpiar y proteger los inyectores de combustible en motores de dos y cuatro tiempos. Su fórmula avanzada disuelve los depósitos de suciedad y residuos acumulados en los inyectores, mejorando la pulverización del combustible y restaurando el rendimiento del motor.',
    whyUseIt: '¿Por qué usar el LIMPIA INYECTORES de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Limpia y desbloquea los inyectores de combustible.\n- Mejora la pulverización del combustible.\n- Restaura el rendimiento y la eficiencia del motor.\n- Reduce el consumo de combustible.\n- Protege contra la corrosión y la formación de depósitos.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el motor esté apagado y en una superficie nivelada.\n2. Agrega el contenido completo del envase de LIMPIA INYECTORES al tanque de combustible.\n3. Reposta combustible para mezclar el aditivo con el combustible.\n4. Utiliza el vehículo de manera normal, preferiblemente en un trayecto prolongado para permitir una buena circulación del aditivo por el sistema de combustible.\n5. Repite el proceso de aplicación periódicamente según las recomendaciones del fabricante.\n6. ¡Disfruta de inyectores limpios y un motor que funciona como nuevo!'
  },
  {
    id: 25,
    name: 'Motor Cool',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Motor-Cool.jpg',
    categoria: 'Aditivos para Refrigeración',
    descripcion: 'El Motor Cool de Bardahl es un aditivo de refrigeración de alto rendimiento que ayuda a mantener la temperatura del motor en niveles óptimos. Su fórmula especializada previene el sobrecalentamiento, protege contra la corrosión y evita la formación de depósitos en el sistema de refrigeración. Con Motor Cool, tu motor estará protegido y funcionando de manera eficiente.',
    whyUseIt: '¿Por qué usar Motor Cool de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Mantiene la temperatura del motor en niveles óptimos.\n- Previene el sobrecalentamiento.\n- Protege contra la corrosión en el sistema de refrigeración.\n- Evita la formación de depósitos y sedimentos.\n- Mejora la eficiencia y el rendimiento del motor.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el motor esté apagado y frío.\n2. Vierte la cantidad recomendada de Motor Cool en el depósito de refrigerante.\n3. Vuelve a colocar la tapa del depósito y ajústala correctamente.\n4. Arranca el motor y déjalo funcionar durante unos minutos para permitir la circulación del aditivo por el sistema de refrigeración.\n5. ¡Disfruta de un motor fresco y protegido!'
  },
  {
    id: 26,
    name: 'No Smoke',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/No-Smoke.jpg',
    categoria: 'Aditivos para Aceite de Motor',
    descripcion: 'No Smoke de Bardahl es un aditivo para aceite de motor especialmente formulado para reducir el consumo de aceite y evitar la emisión de humo por el escape. Su fórmula avanzada mejora la viscosidad del aceite, reduce el desgaste y proporciona una mayor protección contra la fricción. Con No Smoke, tu motor estará más limpio y funcionando de manera eficiente.',
    whyUseIt: '¿Por qué usar No Smoke de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Reduce el consumo de aceite y la emisión de humo por el escape.\n- Mejora la viscosidad del aceite y la protección contra la fricción.\n- Reduce el desgaste y prolonga la vida útil del motor.\n- Mantiene el motor limpio y libre de depósitos.\n- Mejora el rendimiento y la eficiencia del motor.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el motor esté apagado y en una superficie nivelada.\n2. Vierte la cantidad recomendada de No Smoke en el cárter de aceite del motor.\n3. Vuelve a colocar el tapón de llenado y ajústalo correctamente.\n4. Arranca el motor y déjalo funcionar durante unos minutos para permitir la circulación del aditivo por el sistema de lubricación.\n5. ¡Disfruta de un motor sin humo y protegido contra el desgaste!'
  },
  {
    id: 27,
    name: '2t Motos',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/2t-Motos.jpg',
    categoria: 'Aceites para Motor de 2 Tiempos',
    descripcion: 'El 2t Motos de Bardahl es un aceite de motor de 2 tiempos de alto rendimiento especialmente diseñado para motocicletas. Su fórmula avanzada proporciona una excelente lubricación, protección contra el desgaste y reducción de depósitos. Con 2t Motos, tu motor de 2 tiempos estará protegido y funcionando de manera eficiente.',
    whyUseIt: '¿Por qué usar 2t Motos de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Proporciona una excelente lubricación y protección contra el desgaste.\n- Reduce la formación de depósitos en el motor.\n- Mejora la respuesta del acelerador y el rendimiento del motor.\n- Prolonga la vida útil del motor de 2 tiempos.\n- Minimiza el humo y los olores en el escape.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de seguir las recomendaciones del fabricante en cuanto a la proporción de mezcla aceite/combustible.\n2. Mezcla la cantidad adecuada de 2t Motos con la gasolina en un recipiente limpio y apropiado.\n3. Vierte la mezcla de combustible en el tanque de la motocicleta.\n4. Arranca el motor y déjalo funcionar según las indicaciones del fabricante.\n5. ¡Disfruta de un motor de 2 tiempos protegido y con un rendimiento óptimo!'
  },
  {
    id: 28,
    name: 'Limpia tapizados y alfombras',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/Limpia-tapizados-y-alfombras.jpg',
    categoria: 'Productos de Limpieza para Automóviles',
    descripcion: 'El Limpia tapizados y alfombras de Bardahl es un producto de limpieza especializado para automóviles que te ayuda a mantener tus tapizados y alfombras en excelente estado. Su fórmula avanzada elimina de manera efectiva la suciedad, manchas y olores desagradables, dejando un aroma fresco en el interior de tu vehículo. Con el Limpia tapizados y alfombras de Bardahl, tu automóvil lucirá impecable.',
    whyUseIt: '¿Por qué usar el Limpia tapizados y alfombras de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Elimina la suciedad, manchas y olores desagradables de los tapizados y alfombras.\n- Restaura la apariencia y el color original de los tejidos.\n- Deja un aroma fresco y agradable en el interior del vehículo.\n- Fácil de usar y aplicar.\n- Compatible con diferentes tipos de tejidos y materiales.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que los tapizados y alfombras estén libres de objetos sueltos y partículas grandes de suciedad.\n2. Agita bien el envase antes de usar.\n3. Aplica el Limpia tapizados y alfombras de manera uniforme sobre la superficie a limpiar.\n4. Frota suavemente con un cepillo o esponja adecuada para eliminar la suciedad y las manchas.\n5. Deja actuar el producto durante unos minutos.\n6. Retira el exceso de producto y la suciedad con un paño limpio y húmedo.\n7. Deja secar al aire libre o utiliza un ventilador para acelerar el secado.\n8. ¡Disfruta de unos tapizados y alfombras limpios y frescos en tu automóvil!'
  },
  {
    id: 29,
    name: 'balde bardahl 20 litros',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/balde-bardahl-20-litros.jpg',
    categoria: 'Recipientes y Envases',
    descripcion: 'El balde Bardahl de 20 litros es un recipiente resistente y práctico que te permite almacenar y transportar diferentes productos líquidos, incluyendo aceites, lubricantes y aditivos. Su diseño ergonómico facilita el manejo y la vertido del contenido. Con el balde Bardahl, tendrás la solución perfecta para tus necesidades de almacenamiento y manipulación de productos.',
    whyUseIt: '¿Por qué usar el balde Bardahl de 20 litros? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Capacidad de almacenamiento de 20 litros, ideal para grandes cantidades de líquidos.\n- Resistente y duradero, diseñado para un uso prolongado.\n- Mango ergonómico que facilita el transporte y el vertido del contenido.\n- Compatible con una amplia variedad de productos líquidos.\n- Versátil y práctico para uso doméstico, comercial e industrial.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el balde Bardahl esté limpio y en buenas condiciones.\n2. Vierte el líquido deseado en el balde, asegurándote de no exceder su capacidad máxima.\n3. Utiliza la asa o mango para transportar el balde de manera segura.\n4. Para verter el contenido, inclina el balde suavemente y controla el flujo del líquido.\n5. Al finalizar, lava el balde con agua y detergente para eliminar cualquier residuo.\n6. Almacena el balde en un lugar seguro y seco, lejos de fuentes de calor o ignición.\n7. ¡Disfruta de la practicidad y utilidad del balde Bardahl de 20 litros!'
  },
  {
    id: 30,
    name: 'Revividor de Neumáticos',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/Revividor-de-Neumaticos.jpg',
    categoria: 'Productos para Neumáticos',
    descripcion: 'El Revividor de Neumáticos de Bardahl es el producto perfecto para darle vida y brillo a tus neumáticos. Su fórmula especializada restaura el color y la apariencia original de los neumáticos, dejándolos como nuevos. Además, proporciona protección contra los rayos UV y otros agentes externos que pueden dañar y desgastar tus neumáticos. Con el Revividor de Neumáticos de Bardahl, tus neumáticos lucirán impecables y estarán protegidos.',
    whyUseIt: '¿Por qué usar el Revividor de Neumáticos de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Restaura el color y brillo de los neumáticos.\n- Protección contra los rayos UV y agentes externos.\n- Evita el envejecimiento prematuro y el desgaste de los neumáticos.\n- Fácil de aplicar y de larga duración.\n- Mejora la apariencia estética de tu vehículo.',
    instrucctions: 'Modo de uso:\n1. Lava y seca tus neumáticos antes de aplicar el Revividor de Neumáticos.\n2. Agita bien el envase antes de usar.\n3. Aplica el producto de manera uniforme sobre la superficie de los neumáticos con un aplicador o una esponja.\n4. Frota suavemente para asegurar una cobertura completa.\n5. Deja que el producto se seque durante unos minutos.\n6. Retira el exceso de producto con un paño limpio.\n7. ¡Disfruta de unos neumáticos revitalizados y protegidos con el Revividor de Neumáticos de Bardahl!'
  },
  {
    id: 31,
    name: 'balde bardahl 20 litros',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/balde-bardahl-20-litros.jpg',
    categoria: 'Recipientes y Envases',
    descripcion: 'El balde Bardahl de 20 litros es un recipiente resistente y práctico que te permite almacenar y transportar diferentes productos líquidos, incluyendo aceites, lubricantes y aditivos. Su diseño ergonómico facilita el manejo y el vertido del contenido. Con el balde Bardahl, tendrás la solución perfecta para tus necesidades de almacenamiento y manipulación de productos.',
    whyUseIt: '¿Por qué usar el balde Bardahl de 20 litros? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Capacidad de almacenamiento de 20 litros, ideal para grandes cantidades de líquidos.\n- Resistente y duradero, diseñado para un uso prolongado.\n- Mango ergonómico que facilita el transporte y el vertido del contenido.\n- Compatible con una amplia variedad de productos líquidos.\n- Versátil y práctico para uso doméstico, comercial e industrial.',
    instrucctions: 'Modo de uso:\n1. Asegúrate de que el balde Bardahl esté limpio y en buenas condiciones.\n2. Vierte el líquido deseado en el balde, asegurándote de no exceder su capacidad máxima.\n3. Utiliza la asa o mango para transportar el balde de manera segura.\n4. Para verter el contenido, inclina el balde suavemente y controla el flujo del líquido.\n5. Al finalizar, lava el balde con agua y detergente para eliminar cualquier residuo.\n6. Almacena el balde en un lugar seguro y seco, lejos de fuentes de calor o ignición.\n7. ¡Disfruta de la practicidad y utilidad del balde Bardahl de 20 litros!'
  },
  {
    id: 32,
    name: 'Diseño sin título 14',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/05/Dise%C3%B1o-sin-t%C3%ADtulo-14.png',
    categoria: 'Accesorios y Herramientas',
    descripcion: 'El Diseño sin título 14 de Bardahl es una herramienta innovadora y versátil diseñada para facilitar el mantenimiento y cuidado de tu vehículo. Su diseño ergonómico y funcionalidad intuitiva lo convierten en el compañero perfecto para realizar diferentes tareas relacionadas con el motor y el mantenimiento automotriz. Ya sea para ajustes, reparaciones o limpieza, el Diseño sin título 14 te brinda la confianza y la eficiencia que necesitas.',
    whyUseIt: '¿Por qué usar el Diseño sin título 14 de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Versatilidad para realizar diferentes tareas de mantenimiento.\n- Diseño ergonómico que proporciona comodidad y facilidad de uso.\n- Alta calidad y durabilidad para un rendimiento óptimo.\n- Funcionalidades intuitivas que simplifican las tareas de mantenimiento.\n- Ideal para uso doméstico y profesional.',
    instrucctions: 'Modo de uso:\n1. Familiarízate con las diferentes funciones y herramientas del Diseño sin título 14.\n2. Utiliza las herramientas correspondientes según la tarea que desees realizar.\n3. Sigue las instrucciones específicas para cada tarea de mantenimiento.\n4. Manipula el Diseño sin título 14 con precaución y siguiendo las normas de seguridad.\n5. Al finalizar, limpia y guarda el Diseño sin título 14 en un lugar seguro.\n6. ¡Disfruta de la versatilidad y eficiencia del Diseño sin título 14 de Bardahl!'
  },
  {
    id: 33,
    name: 'OPTIMIZADOR DE GAS OIL MINERIA GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/OPTIMIZADOR-DE-GAS-OIL-MINERIA-GRUPAL.jpg',
    categoria: 'Aditivos para Combustible',
    descripcion: 'El Optimizador de Gas Oil Minería Grupal de Bardahl es un aditivo de alto rendimiento diseñado específicamente para mejorar la calidad y eficiencia del gasoil utilizado en operaciones mineras. Su fórmula avanzada permite optimizar la combustión, reducir la formación de depósitos y mantener limpios los sistemas de inyección de combustible. Con el Optimizador de Gas Oil Minería Grupal de Bardahl, podrás maximizar el rendimiento de tus equipos y reducir los costos de mantenimiento.',
    whyUseIt: '¿Por qué usar el Optimizador de Gas Oil Minería Grupal de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Mejora la calidad y eficiencia del gasoil utilizado en operaciones mineras.\n- Optimiza la combustión y reduce la formación de depósitos.\n- Mantiene limpios los sistemas de inyección de combustible.\n- Maximiza el rendimiento de los equipos mineros.\n- Reduce los costos de mantenimiento y prolonga la vida útil de los motores.',
    instrucctions: 'Modo de uso:\n1. Agita bien el envase antes de usar el Optimizador de Gas Oil Minería Grupal.\n2. Asegúrate de que el sistema de combustible esté limpio y en buen estado.\n3. Añade la cantidad recomendada de producto al tanque de combustible.\n4. Reposta gasoil según las indicaciones y requisitos del fabricante.\n5. Utiliza el equipo minero de manera habitual, permitiendo que el aditivo se mezcle correctamente con el combustible.\n6. ¡Disfruta de un gasoil optimizado y un rendimiento óptimo en tus operaciones mineras con el Optimizador de Gas Oil Minería Grupal de Bardahl!'
  },
  {
    id: 34,
    name: 'ACEITE 2T MOTOS SEMI SINTETICO Botella 1000 cm³',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/ACEITE-2T-MOTOS-SEMI-SINTETICO-Botella-1000-cm.jpg',
    categoria: 'Aceites para Motores',
    descripcion: 'El Aceite 2T Motos Semi Sintético de Bardahl es la elección perfecta para mantener tu moto en óptimas condiciones. Su fórmula semisintética de alta calidad garantiza una lubricación eficiente y una protección superior para el motor de tu moto. Además, reduce el desgaste, previene la corrosión y minimiza la formación de depósitos en el sistema de combustión. Con el Aceite 2T Motos Semi Sintético de Bardahl, disfrutarás de un rendimiento excepcional y una mayor vida útil para tu moto.',
    whyUseIt: '¿Por qué usar el Aceite 2T Motos Semi Sintético de Bardahl? Este producto ofrece numerosos beneficios, entre ellos:',
    benefic: '- Lubricación eficiente y protección superior para el motor de tu moto.\n- Reduce el desgaste y prolonga la vida útil del motor.\n- Previene la corrosión y minimiza la formación de depósitos en el sistema de combustión.\n- Fórmula semisintética de alta calidad para un rendimiento excepcional.\n- Compatible con motores 2 tiempos de diferentes marcas y modelos.',
    instrucctions: 'Modo de uso:\n1. Consulta el manual del fabricante para conocer las especificaciones y recomendaciones del aceite para tu moto.\n2. Asegúrate de que el motor esté apagado y la moto esté en una superficie nivelada.\n3. Retira la tapa del depósito de aceite y vacía el contenido anterior si es necesario.\n4. Vierte lentamente el Aceite 2T Motos Semi Sintético de Bardahl en el depósito hasta alcanzar el nivel indicado.\n5. Vuelve a colocar la tapa del depósito de aceite y asegúrate de que esté bien sellada.\n6. Realiza un breve recorrido para permitir que el aceite se distribuya por el sistema de lubricación.\n7. ¡Disfruta de una moto con un motor protegido y un rendimiento excepcional gracias al Aceite 2T Motos Semi Sintético de Bardahl!'
  },
  {
    id: 35,
    name: 'ACEITE SEMI SINTÉTICO 10W 40 GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/ACEITE-SEMI-SINT%C3%89TICO-10W-40-GRUPAL.jpg',
    descripcion: 'El aceite semi sintético 10W-40 GRUPAL es una excelente opción para mantener el motor de tu vehículo en óptimas condiciones. Su formulación única combina aceites minerales de alta calidad con aditivos sintéticos, ofreciendo una protección superior y un rendimiento excepcional.',
    whyUseIt: 'Este aceite es especialmente recomendado para motores de última generación, ya que garantiza una lubricación eficiente en diversas condiciones de temperatura y carga. Su viscosidad equilibrada proporciona una excelente protección contra el desgaste, reduciendo la fricción y mejorando la eficiencia del motor.',
    benefic: 'Algunos de los beneficios clave del aceite semi sintético 10W-40 GRUPAL son:\n- Mayor vida útil del motor\n- Reducción del consumo de combustible\n- Mejor arranque en frío\n- Excelente resistencia a altas temperaturas\n- Protección contra la formación de depósitos y lodos\n- Minimiza la fricción y el desgaste\n- Contribuye a mantener la potencia y el rendimiento del motor',
    instrucctions: 'Para obtener los mejores resultados, se recomienda seguir las instrucciones del fabricante del vehículo en cuanto a los intervalos de cambio de aceite y la cantidad requerida. Asegúrate de drenar completamente el aceite usado antes de realizar el cambio y utilizar un filtro de aceite de calidad. Si tienes alguna duda o necesitas asesoramiento adicional, no dudes en consultar con nuestro equipo de expertos en lubricantes automotrices.'
  },
  {
    id: 36,
    name: '190730 3',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/190730-3.jpg',
    descripcion: 'El 190730 3 es un aditivo de alto rendimiento diseñado para mejorar el funcionamiento y la protección del motor. Su fórmula avanzada proporciona beneficios significativos en términos de rendimiento, eficiencia y durabilidad.',
    whyUseIt: 'Este aditivo es especialmente recomendado para motores de gasolina y diésel, ya que ayuda a optimizar la combustión, reducir la fricción, mejorar la limpieza interna y proteger contra el desgaste. Además, contribuye a mantener la potencia y el rendimiento del motor a lo largo del tiempo.',
    benefic: 'Algunos de los beneficios clave del 190730 3 son:\n- Mejora el rendimiento y la respuesta del motor\n- Reduce el consumo de combustible\n- Protege contra la formación de depósitos y la corrosión\n- Mejora la lubricación y reduce el desgaste\n- Contribuye a una combustión más eficiente\n- Ayuda a mantener la limpieza interna del motor\n- Prolonga la vida útil de componentes clave',
    instrucctions: 'La forma de aplicación del 190730 3 puede variar según el tipo de motor y las recomendaciones del fabricante. Se suele agregar directamente al depósito de combustible en la proporción indicada. Es importante agitar bien el producto antes de usarlo y seguir las instrucciones específicas del envase. Si tienes alguna pregunta o necesitas asesoramiento adicional, nuestro equipo de especialistas estará encantado de ayudarte.'
  },
  {
    id: 37,
    name: 'Grasas',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Grasas.jpg',
    descripcion: 'Nuestras grasas de alta calidad son la elección perfecta para lubricar y proteger una amplia variedad de componentes mecánicos. Están diseñadas para resistir condiciones extremas y ofrecer un rendimiento duradero incluso en entornos adversos.',
    whyUseIt: 'El uso de grasas adecuadas es fundamental para garantizar el correcto funcionamiento y la vida útil de rodamientos, articulaciones y otros componentes sometidos a cargas y fricción. Nuestras grasas están formuladas con aditivos especiales que proporcionan una lubricación superior, reduciendo la fricción y el desgaste.',
    benefic: 'Algunos de los beneficios clave de nuestras grasas son:\n- Excelente protección contra el desgaste y la corrosión\n- Reducción de la fricción y el ruido\n- Resistencia a altas temperaturas y cargas pesadas\n- Estabilidad estructural a largo plazo\n- Mayor vida útil de los componentes\n- Facilidad de aplicación\n- Versatilidad para diversas aplicaciones',
    instrucctions: 'La aplicación de la grasa puede variar según el componente y las recomendaciones del fabricante. Se suele aplicar directamente en las superficies a lubricar utilizando una pistola o un aplicador adecuado. Es importante seguir las instrucciones específicas del producto y asegurarse de limpiar bien las superficies antes de aplicar la grasa. Si tienes alguna duda o necesitas asesoramiento adicional, nuestro equipo de expertos estará encantado de ayudarte.'
  },
  {
    id: 38,
    name: 'Infla y Sella Neumáticos',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Infla-y-Sella-Neumaticos.jpg',
    descripcion: 'Nuestro producto infla y sella neumáticos es una solución práctica y eficiente para situaciones de emergencia en las que necesitas reparar rápidamente un pinchazo o una pérdida de presión en tus neumáticos. Su fórmula especial permite sellar el orificio y reinflar el neumático en cuestión de minutos.',
    whyUseIt: 'Este producto es especialmente recomendado para conductores que desean contar con una opción segura y conveniente en caso de emergencia. Su fácil aplicación y efectividad hacen que sea una herramienta imprescindible para viajes largos, rutas desconocidas o situaciones en las que no tienes acceso inmediato a un taller de reparación.',
    benefic: 'Algunos de los beneficios clave de nuestro infla y sella neumáticos son:\n- Reparación rápida y sencilla de pinchazos\n- Ahorro de tiempo y dinero en cambios de neumáticos\n- Mayor seguridad y tranquilidad en carretera\n- Fórmula duradera y resistente\n- Compatible con la mayoría de neumáticos y válvulas\n- Práctico y fácil de transportar\n- Versatilidad para automóviles, motocicletas y otros vehículos',
    instrucctions: 'Antes de usar el infla y sella neumáticos, asegúrate de leer las instrucciones detalladas del producto. En caso de pinchazo, retira cualquier objeto que haya causado la perforación y luego conecta el producto a la válvula del neumático. Sigue las instrucciones para llenar el neumático y sellar el orificio. Es importante conducir con precaución después de usar el producto y buscar una solución permanente lo antes posible. Si necesitas más información o asesoramiento adicional, nuestro equipo estará encantado de atenderte.'
  },
  {
    id: 39,
    name: 'ACEITE SINTÉTICO 5W 30 GRUPAL',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/ACEITE-SINT%C3%89TICO-5W-30-GRUPAL.jpg',
    descripcion: 'El aceite sintético 5W-30 GRUPAL es una opción premium para el cuidado y mantenimiento de tu motor. Su avanzada formulación sintética ofrece una lubricación excepcional y protección contra el desgaste en una amplia gama de condiciones de funcionamiento.',
    whyUseIt: 'Este aceite es especialmente recomendado para motores modernos y exigentes, incluyendo aquellos equipados con tecnología de alta potencia y eficiencia. Su viscosidad equilibrada y aditivos especiales garantizan una lubricación óptima en arranques en frío, condiciones de alta temperatura y altas cargas.',
    benefic: 'Algunos de los beneficios clave del aceite sintético 5W-30 GRUPAL son:\n- Protección superior contra el desgaste y la corrosión\n- Reducción de la fricción y mejora de la eficiencia\n- Mantenimiento de la potencia y el rendimiento del motor\n- Limpieza interna avanzada\n- Resistencia a altas temperaturas y oxidación\n- Mayor vida útil del motor\n- Ahorro de combustible',
    instrucctions: 'Para obtener los mejores resultados, se recomienda seguir las instrucciones del fabricante del vehículo en cuanto a los intervalos de cambio de aceite y la cantidad requerida. Asegúrate de drenar completamente el aceite usado antes de realizar el cambio y utilizar un filtro de aceite de calidad. Si tienes alguna pregunta o necesitas asesoramiento adicional, nuestro equipo de expertos en lubricantes automotrices estará encantado de ayudarte.'
  },
  {
    id: 40,
    name: 'AMI 270 1',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/AMI-270-1.png',
    category: 'Aditivos para Aceite de Motor',
    descripcion: 'El AMI 270 1 es un aditivo altamente efectivo diseñado para mejorar el rendimiento y la protección del aceite de motor. Su fórmula especial ayuda a reducir el desgaste y la fricción, prolongando la vida útil del motor.',
    whyUseIt: 'Este aditivo es especialmente recomendado para vehículos de alto kilometraje o sometidos a condiciones de conducción exigentes. Ayuda a mantener la viscosidad del aceite, protegiendo así el motor en situaciones de altas temperaturas y cargas pesadas.',
    benefic: 'Algunos de los beneficios del AMI 270 1 incluyen: reducción del desgaste del motor, mejora de la eficiencia de combustible, disminución de los ruidos y vibraciones, protección contra la corrosión y limpieza interna del motor.',
    instrucctions: 'Para utilizar el AMI 270 1, simplemente agregue el contenido del envase al aceite de motor durante un cambio de aceite. Se recomienda seguir las instrucciones del fabricante del vehículo para obtener mejores resultados.'
  },
  {
    id: 41,
    name: 'Lubricante Multiuso',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Lubricante-Multiuso.jpg',
    category: 'Lubricantes Multiuso',
    descripcion: 'El Lubricante Multiuso es un producto versátil y de alto rendimiento que brinda lubricación y protección en diversas aplicaciones. Su fórmula especial penetra y lubrica las piezas, reduciendo el desgaste y prolongando la vida útil de los equipos.',
    whyUseIt: 'Este lubricante es ideal para utilizar en mecanismos y componentes que requieren una lubricación efectiva, como bisagras, cerraduras, rodamientos, cadenas, engranajes y herramientas. Proporciona una capa protectora duradera que previene la corrosión y el óxido.',
    benefic: 'Algunos de los beneficios del Lubricante Multiuso incluyen: reducción del desgaste y la fricción, protección contra la corrosión, resistencia a altas temperaturas, desplazamiento de la humedad y facilidad de aplicación con su práctico envase.',
    instrucctions: 'Para utilizar el Lubricante Multiuso, aplíquelo directamente sobre las superficies o piezas a lubricar. Puede usar el aplicador incorporado en el envase para una aplicación precisa. Se recomienda aplicar periódicamente para mantener una lubricación óptima.'
  },
  {
    id: 42,
    name: 'Fluído para direcciones hidraúlicas',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Flu%C3%ADdo-para-direcciones-hidra%C3%BAlicas.jpg',
    category: 'Fluidos para Direcciones Hidráulicas',
    descripcion: 'El Fluido para Direcciones Hidráulicas es un producto de alta calidad diseñado para mantener un rendimiento óptimo en los sistemas de dirección asistida hidráulica. Su fórmula especial ofrece una excelente protección contra el desgaste y la corrosión.',
    whyUseIt: 'Este fluido es recomendado para vehículos equipados con sistemas de dirección asistida hidráulica. Proporciona una lubricación adecuada y evita el desgaste prematuro de las piezas del sistema, asegurando un funcionamiento suave y confiable.',
    benefic: 'Algunos de los beneficios del Fluido para Direcciones Hidráulicas incluyen: reducción del desgaste y la fricción, protección contra la corrosión, estabilidad a altas temperaturas, mejora del rendimiento de la dirección y prolongación de la vida útil de los componentes.',
    instrucctions: 'Para utilizar el Fluido para Direcciones Hidráulicas, siga las recomendaciones del fabricante del vehículo. Generalmente, se debe reemplazar el fluido cada cierto intervalo de tiempo o kilómetros recorridos. Asegúrese de utilizar el tipo de fluido adecuado para su vehículo.'
  },
  {
    id: 43,
    name: 'Aditivo para cajas diferenciales',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Aditivo-para-cajas-diferenciales.jpg',
    category: 'Aditivos para Cajas Diferenciales',
    descripcion: 'El Aditivo para Cajas Diferenciales es un producto de alto rendimiento diseñado para mejorar el funcionamiento y prolongar la vida útil de las cajas diferenciales. Su fórmula especial reduce el desgaste, la fricción y el ruido en estas unidades.',
    whyUseIt: 'Este aditivo es especialmente recomendado para vehículos con tracción en las cuatro ruedas (4x4) o tracción trasera, donde las cajas diferenciales son componentes críticos. Ayuda a reducir el desgaste prematuro y mejora la tracción y estabilidad del vehículo.',
    benefic: 'Algunos de los beneficios del Aditivo para Cajas Diferenciales incluyen: reducción del desgaste y la fricción, disminución del ruido y las vibraciones, protección contra la corrosión, mejora de la tracción y estabilidad del vehículo.',
    instrucctions: 'Para utilizar el Aditivo para Cajas Diferenciales, simplemente agregue el contenido del envase a la caja diferencial según las especificaciones del fabricante del vehículo. Se recomienda realizar el cambio de aditivo junto con el cambio de aceite de la caja diferencial.'
  },
  {
    id: 44,
    name: 'Cadena Liquida',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Cadena-Liquida.jpg',
    category: 'Lubricantes para Cadenas',
    descripcion: 'La Cadena Líquida es un lubricante de alto rendimiento especialmente formulado para brindar una lubricación duradera y efectiva en cadenas de motocicletas, bicicletas y otros equipos que requieren lubricación en cadena.',
    whyUseIt: 'Este lubricante es ideal para mantener la cadena en óptimas condiciones de funcionamiento. Penetra entre los eslabones, reduciendo la fricción y el desgaste, al mismo tiempo que protege contra la corrosión y repele la suciedad y el agua.',
    benefic: 'Algunos de los beneficios de la Cadena Líquida incluyen: reducción del desgaste de la cadena, prolongación de la vida útil de la misma, resistencia a altas temperaturas, protección contra la corrosión y facilidad de aplicación con su práctico envase.',
    instrucctions: 'Para utilizar la Cadena Líquida, aplique el lubricante de manera uniforme sobre toda la longitud de la cadena. Asegúrese de seguir las recomendaciones del fabricante del vehículo o equipo para una aplicación adecuada y periódica del lubricante.'
  },
  {
    id: 45,
    name: 'Lubricante para cadenas 1',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2020/03/Lubricante-para-cadenas-1.jpg',
    category: 'Lubricantes para Cadenas',
    descripcion: 'El Lubricante para Cadenas 1 es un producto de alto rendimiento diseñado específicamente para lubricar y proteger cadenas de motocicletas. Su fórmula especial penetra en los eslabones de la cadena, reduciendo la fricción y prolongando su vida útil.',
    whyUseIt: 'Este lubricante es ideal para motocicletas de alto rendimiento y para uso en condiciones exigentes. Proporciona una lubricación duradera y eficaz, reduciendo el desgaste y el ruido de la cadena, al mismo tiempo que protege contra la corrosión.',
    benefic: 'Algunos de los beneficios del Lubricante para Cadenas 1 incluyen: reducción del desgaste y la fricción, prolongación de la vida útil de la cadena, resistencia a altas temperaturas, protección contra la corrosión y facilidad de aplicación con su práctico envase.',
    instrucctions: 'Para utilizar el Lubricante para Cadenas 1, aplique el lubricante de manera uniforme sobre toda la longitud de la cadena. Asegúrese de seguir las recomendaciones del fabricante de la motocicleta para una aplicación adecuada y periódica del lubricante.'
  },
  {
    id: 46,
    name: 'balde bardahl 20 litros',
    url: 'https://www.bardahl.com.ar/wp-content/uploads/2022/10/balde-bardahl-20-litros.jpg',
    category: 'Recipientes y Envases',
    descripcion: 'El Balde Bardahl de 20 litros es un recipiente de alta calidad y resistencia, diseñado para almacenar y transportar aceites, lubricantes y otros productos de manera segura. Su capacidad de 20 litros permite el almacenamiento de grandes cantidades de productos.',
    whyUseIt: 'Este balde es ideal para talleres mecánicos, concesionarios y otros lugares donde se requiere el manejo y almacenamiento seguro de productos químicos. Su construcción resistente y hermética asegura que los productos se mantengan en óptimas condiciones.',
    benefic: 'Algunos de los beneficios del Balde Bardahl de 20 litros incluyen: capacidad de almacenamiento de 20 litros, construcción resistente y duradera, cierre hermético para evitar fugas y derrames, asa de transporte ergonómica y fácil manipulación.',
    instrucctions: 'Para utilizar el Balde Bardahl de 20 litros, asegúrese de manipularlo con precaución y utilizarlo exclusivamente para almacenar productos compatibles. Mantenga el balde en un lugar fresco y seco, lejos de fuentes de calor o llamas abiertas.'
  }
]

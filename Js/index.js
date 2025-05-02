let requisitions = [];
let purchaseOrders = [];
let payments = [];

function addRequisition() {
    const material = document.getElementById('material').value;
    const quantity = document.getElementById('quantity').value;

    if (material && quantity) {
        const requisition = { material, quantity };
        requisitions.push(requisition);
        displayRequisitions();
        document.getElementById('material').value = '';
        document.getElementById('quantity').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function displayRequisitions() {
    const requisitionList = document.getElementById('requisition-list');
    requisitionList.innerHTML = '';
    requisitions.forEach((req, index) => {
        const li = document.createElement('li');
        li.textContent = `Requerimiento ${index + 1}: ${req.material} - Cantidad: ${req.quantity}`;
        requisitionList.appendChild(li);
    });
}

function generatePurchaseOrder() {
    const supplier = document.getElementById('supplier').value;
    const deliveryDate = document.getElementById('delivery-date').value;

    if (supplier && deliveryDate) {
        const order = { supplier, deliveryDate };
        purchaseOrders.push(order);
        displayPurchaseOrders();
        document.getElementById('supplier').value = '';
        document.getElementById('delivery-date').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function displayPurchaseOrders() {
    const purchaseOrderList = document.getElementById('purchase-order-list');
    purchaseOrderList.innerHTML = '';
    purchaseOrders.forEach((order, index) => {
        const li = document.createElement('li');
        li.textContent = `Orden de Compra ${index + 1}: Proveedor: ${order.supplier}, Fecha de Entrega: ${order.deliveryDate}`;
        purchaseOrderList.appendChild(li);
    });
}

function authorizePayment() {
    const invoiceAmount = document.getElementById('invoice-amount').value;
    const paymentDate = document.getElementById('payment-date').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (invoiceAmount && paymentDate) {
        const payment = { invoiceAmount, paymentDate, paymentMethod };
        payments.push(payment);
        displayPayments();
        document.getElementById('invoice-amount').value = '';
        document.getElementById('payment-date').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function displayPayments() {
    const paymentList = document.getElementById('payment-list');
    paymentList.innerHTML = '';
    payments.forEach((payment, index) => {
        const li = document.createElement('li');
        li.textContent = `Orden de Pago ${index + 1}: Importe: ${payment.invoiceAmount}, Fecha de Pago: ${payment.paymentDate}, Método: ${payment.paymentMethod}`;
        paymentList.appendChild(li);
    });
}
        
# Marketplace-Technical-Foundation-General-E-Commerce

### **Pages** 
1. **Home Page:** 
- A visually appealing landing page that highlights featured sofas, chairs, and other furniture categories. 
- Includes dynamic sections for promotions, bestsellers, and trending collections. 
- Fully responsive for a seamless experience across devices. 

2. **Shop Page:** 
- A comprehensive product catalog with filtering and sorting options (e.g., by category, price, and material). 
- Real-time updates on product availability and detailed descriptions for each item. 

3. **Product Detail Page:** 
- A dedicated page for each product with high-quality images, specifications, and customer reviews. 

4. **Cart Page:** 
- Allows users to view and manage items in their cart. 
- Features quantity adjustments, subtotal calculations, and real-time updates. 

5. **Order Tracking Page:** 
- Users can monitor the status and progress of their orders with live updates from the shipment provider. 

6. **Track Order Page:** 
- A simple input form for users to enter their order ID and retrieve detailed tracking information. 

7. **Checkout Page:** 
- A secure and user-friendly checkout process integrated with Stripe for payments. 
- Supports multiple payment methods and ensures compliance with industry standards. 

8. **Thank You Page:** 
- A confirmation page to thank users after successfully placing an order. 
- Includes order details and next steps (e.g., tracking or support options). 

---

### **Technologies Used** 

#### **Frontend:** 
- **Next.js:** For building dynamic, server-rendered UIs with superior performance and SEO. 
- **Tailwind CSS:** For crafting responsive, visually appealing designs. 
- **Shadcn/UI:** For reusable and customizable UI components to enhance user experience. 

#### **Backend:** 
- **Sanity CMS:** To manage and structure furniture products, categories, and promotional content efficiently. 
- **Clerk:** For seamless user authentication and account management. 

#### **APIs:** 
- **ShipEngine API:** To handle shipment tracking and delivery logistics. 
- **Stripe API:** For secure and reliable payment processing.
### **API Endpoints** 

Below are the main API endpoints that power the functionalities of the marketplace: 

| **Endpoint** | **Method** | **Description** |
|----------------------------------|------------|----------------------------------------------------------------|
| `/api/create-order` | POST | Creates a new order when a user completes a purchase. |
| `/api/orders` | GET | Fetches all orders for administrative purposes. |
| `/api/shipengine/create-label` | POST | Generates a shipping label for an order. |
| `/api/shipengine/get-rates` | GET | Retrieves shipping cost estimates for various providers. |
| `/api/shipengine/track-shipment`| GET | Tracks the current location and status of a shipment. |
| `/api/track-orders` | GET | Displays all orders placed by a user. |
| `/api/send/confirmation-email` | POST | Sends an order confirmation email to the user. |
| `/api/reviews/[productId]` | POST | Allows users to submit reviews for a specific product. |
| `/api/reviews/[productId]` | GET | Retrieves all reviews for a specific product. | 

---

### **Explanation of Key Endpoints** 

#### **Order Management** 
- **`/api/create-order`**: Captures order details such as items, quantities, shipping address, and payment confirmation. 
- **`/api/orders`**: Helps admins view and manage all orders in the system. 

#### **Shipping and Tracking** 
- **`/api/shipengine/create-label`**: Automates label creation for shipment using the ShipEngine API. 
- **`/api/shipengine/get-rates`**: Enables cost comparison between shipping providers. 
- **`/api/shipengine/track-shipment`**: Provides real-time updates on shipment location and delivery status. 

#### **User Interaction** 
- **`/api/track-orders`**: Gives users a dashboard to monitor their order history and statuses. 
- **`/api/send/confirmation-email`**: Sends order details and confirmation to the user's email. 

#### **Product Reviews** 
- **`/api/reviews/[productId]` (POST)**: Allows customers to share feedback about a product. 
- **`/api/reviews/[productId]` (GET)**: Displays product reviews to potential buyers for informed decisions.
### **1. Data Management in Sanity** 
- **Centralized Data Storage:** All e-commerce data, such as furniture products (sofas, chairs, etc.), categories, promotions, and customer reviews, is stored and managed in Sanity’s Content Studio. 
- **Flexible Schema Design:** Sanity’s schema customization allows you to define data structures tailored to your marketplace's needs. 

---

### **2. Fetching Data from Sanity** 
- **GROQ Queries:** Next.js uses GROQ (Graph-Relational Object Queries) to fetch structured data from Sanity’s API endpoints. 
- **API Flexibility:** The APIs retrieve only the necessary data, reducing overhead and improving performance. 

---

### **3. Rendering Strategies in Next.js** 

#### **Server-Side Rendering (SSR):** 
- **Dynamic Pages:** Pages such as product detail pages, order details, and user-specific dashboards are rendered on-demand, ensuring up-to-date and personalized content. 

#### **Static Site Generation (SSG):** 
- **Pre-rendered Pages:** Static pages like the homepage, category pages, and promotional sections are generated at build time, ensuring fast loading speeds and better SEO. 

---

### **4. Real-Time Updates** 
- **Webhooks for Instant Updates:** Sanity’s webhooks notify the application whenever there are changes to content (e.g., product availability or price updates). 
- **No Manual Rebuilds:** This real-time synchronization ensures that users always see the latest content without needing manual deployment. 

---

### **5. Rendering Components** 
- **Dynamic User Interfaces:** The fetched data is passed into Next.js React components, enabling the rendering of interactive and responsive elements like product carousels, filters, and detailed product views

-- CreateTable
CREATE TABLE "Users" (
    "usr_id" SERIAL NOT NULL,
    "usr_email" TEXT NOT NULL,
    "usr_password" TEXT NOT NULL,
    "usr_updatedAt" TIMESTAMP(3),
    "usr_createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "usr_profile" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("usr_id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "prf_id" SERIAL NOT NULL,
    "prf_firstname" TEXT,
    "prf_lastname" TEXT,
    "prf_points" INTEGER DEFAULT 1,
    "prf_updatedat" TIMESTAMP(3) NOT NULL,
    "prf_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("prf_id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "ctr_id" SERIAL NOT NULL,
    "ctr_profile" INTEGER NOT NULL,
    "ctr_updatedAt" TIMESTAMP(3) NOT NULL,
    "prf_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ctr_status" INTEGER NOT NULL,
    "prf_sinisterhistory" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("ctr_id")
);

-- CreateTable
CREATE TABLE "SinisterHistory" (
    "sih_id" SERIAL NOT NULL,
    "sih_subscription" INTEGER NOT NULL,
    "sub_profile" INTEGER NOT NULL,
    "sih_sinister" INTEGER NOT NULL,
    "sih_date" TIMESTAMP(3) NOT NULL,
    "sih_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sih_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SinisterHistory_pkey" PRIMARY KEY ("sih_id")
);

-- CreateTable
CREATE TABLE "ContractStatus" (
    "cts_id" SERIAL NOT NULL,
    "cts_label" TEXT NOT NULL,
    "cts_updatedAt" TIMESTAMP(3) NOT NULL,
    "cts_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContractStatus_pkey" PRIMARY KEY ("cts_id")
);

-- CreateTable
CREATE TABLE "Vehicule" (
    "vhc_id" SERIAL NOT NULL,
    "vhc_brand" TEXT NOT NULL,
    "vhc_registration" TEXT NOT NULL,
    "vhc_age" INTEGER NOT NULL,
    "vhc_updatedAt" TIMESTAMP(3) NOT NULL,
    "vhc_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilePrf_id" INTEGER NOT NULL,
    "vehiculeTypeVht_id" INTEGER NOT NULL,

    CONSTRAINT "Vehicule_pkey" PRIMARY KEY ("vhc_id")
);

-- CreateTable
CREATE TABLE "VehiculeType" (
    "vht_id" SERIAL NOT NULL,
    "vht_label" TEXT NOT NULL,
    "vht_category" TEXT NOT NULL,
    "vht_updatedAt" TIMESTAMP(3) NOT NULL,
    "vht_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VehiculeType_pkey" PRIMARY KEY ("vht_id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "sub_id" SERIAL NOT NULL,
    "sub_label" TEXT NOT NULL,
    "sub_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sub_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("sub_id")
);

-- CreateTable
CREATE TABLE "SubscriptionGuarentee" (
    "sug_id" SERIAL NOT NULL,
    "sug_guarantee" INTEGER,
    "sug_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sug_updatedAt" TIMESTAMP(3) NOT NULL,
    "subscriptionSub_id" INTEGER,

    CONSTRAINT "SubscriptionGuarentee_pkey" PRIMARY KEY ("sug_id")
);

-- CreateTable
CREATE TABLE "Guarantee" (
    "gre_id" SERIAL NOT NULL,
    "gre_label" TEXT NOT NULL,
    "gre_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "gre_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guarantee_pkey" PRIMARY KEY ("gre_id")
);

-- CreateTable
CREATE TABLE "Sinister" (
    "sin_id" SERIAL NOT NULL,
    "sin_label" TEXT NOT NULL,
    "sin_createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sin_updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sinister_pkey" PRIMARY KEY ("sin_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_usr_email_key" ON "Users"("usr_email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_usr_profile_key" ON "Users"("usr_profile");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_usr_profile_fkey" FOREIGN KEY ("usr_profile") REFERENCES "Profile"("prf_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_ctr_status_fkey" FOREIGN KEY ("ctr_status") REFERENCES "ContractStatus"("cts_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_ctr_profile_fkey" FOREIGN KEY ("ctr_profile") REFERENCES "Profile"("prf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_prf_sinisterhistory_fkey" FOREIGN KEY ("prf_sinisterhistory") REFERENCES "SinisterHistory"("sih_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SinisterHistory" ADD CONSTRAINT "SinisterHistory_sih_subscription_fkey" FOREIGN KEY ("sih_subscription") REFERENCES "Subscription"("sub_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SinisterHistory" ADD CONSTRAINT "SinisterHistory_sub_profile_fkey" FOREIGN KEY ("sub_profile") REFERENCES "Profile"("prf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SinisterHistory" ADD CONSTRAINT "SinisterHistory_sih_sinister_fkey" FOREIGN KEY ("sih_sinister") REFERENCES "Sinister"("sin_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicule" ADD CONSTRAINT "Vehicule_profilePrf_id_fkey" FOREIGN KEY ("profilePrf_id") REFERENCES "Profile"("prf_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicule" ADD CONSTRAINT "Vehicule_vehiculeTypeVht_id_fkey" FOREIGN KEY ("vehiculeTypeVht_id") REFERENCES "VehiculeType"("vht_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriptionGuarentee" ADD CONSTRAINT "SubscriptionGuarentee_sug_guarantee_fkey" FOREIGN KEY ("sug_guarantee") REFERENCES "Guarantee"("gre_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriptionGuarentee" ADD CONSTRAINT "SubscriptionGuarentee_subscriptionSub_id_fkey" FOREIGN KEY ("subscriptionSub_id") REFERENCES "Subscription"("sub_id") ON DELETE SET NULL ON UPDATE CASCADE;

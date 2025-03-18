ALTER TABLE `invoices` RENAME COLUMN `invoice_id` TO `externalId`;--> statement-breakpoint
ALTER TABLE `invoices` RENAME COLUMN `external_id` TO `userId`;--> statement-breakpoint
ALTER TABLE `invoices` DROP INDEX `invoices_invoice_id_unique`;--> statement-breakpoint
ALTER TABLE `invoices` MODIFY COLUMN `externalId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` MODIFY COLUMN `userId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` MODIFY COLUMN `status` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` MODIFY COLUMN `created` timestamp NOT NULL DEFAULT '2025-03-18 01:23:35.319';--> statement-breakpoint
ALTER TABLE `invoices` MODIFY COLUMN `updated` timestamp NOT NULL DEFAULT '2025-03-18 01:23:35.319';--> statement-breakpoint
ALTER TABLE `invoices` MODIFY COLUMN `currency` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` ADD `invoiceId` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` ADD `merchantName` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` ADD `merchantProfilePictureUrl` text NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` ADD `expiryDate` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` ADD `invoiceUrl` text NOT NULL;--> statement-breakpoint
ALTER TABLE `invoices` ADD `availableBanks` json;--> statement-breakpoint
ALTER TABLE `invoices` ADD `availableRetailOutlets` json;--> statement-breakpoint
ALTER TABLE `invoices` ADD `availableEwallets` json;--> statement-breakpoint
ALTER TABLE `invoices` ADD `availableQrCodes` json;--> statement-breakpoint
ALTER TABLE `invoices` ADD `availableDirectDebits` json;--> statement-breakpoint
ALTER TABLE `invoices` ADD `availablePaylaters` json;--> statement-breakpoint
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_invoiceId_unique` UNIQUE(`invoiceId`);--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `user_id`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `merchant_name`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `merchant_profile_picture_url`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `expiry_date`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `invoice_url`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `available_banks`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `available_retail_outlets`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `available_ewallets`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `available_qr_codes`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `available_direct_debits`;--> statement-breakpoint
ALTER TABLE `invoices` DROP COLUMN `available_paylaters`;